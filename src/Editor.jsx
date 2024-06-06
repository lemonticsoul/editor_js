import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { ImageBlock } from "./customBlocks/Image/ImageBlock";
import "./customBlocks/Image/ImageBlock.css";
import { ChartBlock } from "./customBlocks/Chart/ChartBlock";

const Editor = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        image: ImageBlock,
        chart: ChartBlock,
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default Editor;
