import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import Wrapper from "components/terminal/Wrapper";
import Input from "components/terminal/Input";
import Empty from "components/terminal/Empty";
import Folder from "components/terminal/Folder";
import Emphasis from "components/terminal/Emphasis";
// modules
import { getCommand } from "modules/json";
import { openPage } from "modules/pageloading";

const Terminal = () => {
  const dispatch = useDispatch();
  const command = useSelector((state) => state.json.command);
  const [messages, setMessages] = useState([]);
  const [stack, setStack] = useState([]);
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);

  const onKeyUp = ({ target, key }) => {
    if (!target) return;
    if (key === "Enter") {
      const cmd = target.value.toLowerCase();
      target.value = "";
      do_command(cmd);
      setStack((v) => [...v, cmd]);
      setIdx(stack.length + 1);
    } else if (key === "ArrowUp") {
      if (idx === 0) return;
      target.value = stack[idx - 1];
      setIdx((v) => v - 1);
      target.selectionStart = target.selectionEnd - target.value.length;
    } else if (key === "ArrowDown") {
      if (stack.length === 0 || idx >= stack.length - 1) return;
      target.value = stack[idx + 1];
      setIdx((v) => v + 1);
    }
  };

  const check_command = (keyword) =>
    command.hasOwnProperty(keyword) ? true : false;

  const do_command = (text) => {
    const isSudo = text.split(" ")[0] === "sudo" ? 1 : 0;
    const cmd = text.split(" ")[0 + isSudo];
    const msgs = [...messages];

    msgs.push({ type: "empty", content: text });
    if (text === "") {
      // Nothing
    } else if (!check_command(cmd)) {
      const output = text.split(" ")[0];
      msgs.push({
        type: "text",
        content: `'${output}'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.`,
      });
    } else if (cmd === "pwd") {
      msgs.push({ type: "text", content: window.location.href });
    } else if (typeof command[cmd] === "string") {
      msgs.push({ type: "text", content: command[cmd] });
    } else if (cmd === "ls") {
      const args = text.split(" ");
      if (args.length >= 2 + isSudo && args[1 + isSudo] !== "-a") {
        msgs.push({
          type: "text",
          content: `ls: cannot access '${
            args[1 + isSudo]
          }': No such file or directory`,
        });
      } else if (args.length === 2 + isSudo && args[1 + isSudo] === "-a") {
        msgs.push({ type: "SECRET", content: command[cmd] });
      } else {
        msgs.push({ type: "FOLDER", content: command[cmd] });
      }
    } else if (cmd === "cd") {
      const args = text.split(" ");
      if (args.length === 1 + isSudo) {
        msgs.push({ type: "text", content: "~" });
      } else {
        const pathList = command[cmd].map((d) => d.content);
        const target =
          args[1 + isSudo].slice(-1) === "/"
            ? args[1 + isSudo].slice(0, -1)
            : args[1 + isSudo];
        if (args.length >= 3 + isSudo) {
          msgs.push({
            type: "text",
            content: "지정된 경로를 찾을 수 없습니다.",
          });
        } else if (args[1] === "~" || (isSudo && args[2] === "~")) {
          dispatch(openPage("/terminal"));
        } else if (pathList.indexOf(target) === -1) {
          msgs.push({
            type: "text",
            content: "지정된 경로를 찾을 수 없습니다.",
          });
        } else {
          dispatch(openPage("/" + target));
        }
      }
    } else if (cmd === "exit") {
      msgs.push({ type: "text", content: "Good Bye!" });
      window.setTimeout(() => dispatch(openPage("/main")), 500);
    } else if (cmd === "clear") {
      msgs.splice(0, msgs.length);
    }

    setMessages(msgs);
  };

  const Content = messages.map((data, idx) => {
    if (data.type === "empty")
      return <Empty key={idx} command={data.content} />;
    else if (data.type === "text") return <div key={idx}>{data.content}</div>;
    else if (data.type === "SECRET")
      return <Folder key={idx} all={true} folders={data.content} />;
    else if (data.type === "FOLDER")
      return <Folder key={idx} all={false} folders={data.content} />;
    else if (data.type === "EMPHASIS")
      return <Emphasis key={idx} content={data.content} />;
    else return null;
  });

  useEffect(() => {
    dispatch(getCommand());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    const msgs = [];

    msgs.push({ type: "EMPHASIS", content: "% Welcome to NB#Log terminal! %" });
    msgs.push({
      type: "EMPHASIS",
      content: "- - - - - - - - - - - - - - - - - - - - - - - - - - ",
    });
    msgs.push({ type: "EMPHASIS", content: "COMMANDS" });
    Object.keys(command).forEach((c) =>
      msgs.push({ type: "text", content: `　${c}` })
    );
    msgs.push({
      type: "EMPHASIS",
      content: "- - - - - - - - - - - - - - - - - - - - - - - - - - ",
    });
    msgs.push({ type: "text", content: "　" });

    setMessages(msgs);
  }, [command, setMessages]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [Content]);

  return (
    <Wrapper ref={ref}>
      {Content}
      <Input onKeyUp={onKeyUp} />
    </Wrapper>
  );
};

export default Terminal;
