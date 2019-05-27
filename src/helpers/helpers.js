const truncate = (string, limit, after) => {
	if (!string || !limit) return;

	let content = string.trim();
	content = content.split(' ').slice(0, limit);
	content = content.join(' ') + (after ? after : '');
	string = content;
  
  return content
};

export default truncate