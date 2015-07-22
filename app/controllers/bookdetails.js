var args = arguments[0] || {};
// console.log("title:" + args.title + ", author: " + args.author);
$.titleLabel.text = args.title || 'Default Title';
$.authorLabel.text = args.author || 'Default author';