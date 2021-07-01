const custom = {
    heading: (node, context) => {
        const { level } = node;
        const tagName = `h${level}`;
        let id = node.firstChild && node.firstChild.literal ? node.firstChild.literal : ""
        id = id.replace(/[^\w\s]/gi, " ")
            .trim()
            .replace(/ +/g, " ")
            .split(" ").join("-");

        if (context.entering) {
            return {
                type: "openTag",
                tagName,
                attributes: {
                    id: id
                }
            };
        }

        return {
            type: "closeTag", tagName,
            attributes: {
                id: id
            }
        };
    },
    link: (node, context) => {
        const { origin, entering } = context;
        const result = origin();
        if (entering && !result.attributes.href.startsWith("#")) {
            result.attributes.target = "_blank";
        }
        return result;
    },
    latex(node) {
        console.log(node)
    },
    btex(node) {
        console.log(node)
    },
    htmlBlock: {
        iframe(node) {
            // <iframe width="100%" height="400"  src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            return [
                { type: 'openTag', tagName: 'iframe', outerNewLine: true, attributes: node.attrs },
                { type: 'html', content: node.childrenHTML },
                { type: 'closeTag', tagName: 'iframe', outerNewLine: true }
            ]
        }
    },
    htmlInline: {
        // b(node, { entering }) {
        //   console.log("Here..")
        //   return entering
        //     ? { type: 'openTag', tagName: 'big', attributes: node.attrs }
        //     : { type: 'closeTag', tagName: 'big' };
        // }
    }
}


export default custom;