export const zIndexSet = (layer) => `
	${layer}
`;

const zIndex = {
	header: zIndexSet(50),
	projectCover: zIndexSet(90),
	modal: zIndexSet(100),
	tooltip: zIndexSet(500),
	snackbar: zIndexSet(400),
};

export default zIndex;