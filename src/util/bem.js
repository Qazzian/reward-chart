export default function bem(block, element = '', modifiers = []) {
	let classes = block;
	if (element) {
		classes = `${block}__${element}`;
	}

	return [].concat([classes], modifiers.map(mod => `${classes}--${mod}`)).join(' ');
}
