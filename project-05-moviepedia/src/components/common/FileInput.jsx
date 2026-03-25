import { useEffect, useRef, useState } from "react";
import placeholderImg from "../../asset/placeholder.webp";
import styles from "./FileInput.module.css";
import closeIcon from "../../asset/close-icon.svg";
import Button from "./Button";

function FileInput({ name, initialPreview }) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    setFile(nextFile);
  };

  const handleClear = () => {
    setFile(null);
    if (inputRef.current) {
      console.log(inputRef.current);
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(initialPreview);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    <>
      <input
        name={name}
        type="file"
        onChange={handleChange}
        ref={inputRef}
        hidden
      />
      <div className={styles.imageContain}>
        <img
          src={preview || placeholderImg}
          onClick={handleClick}
          className={styles.image}
        />
        {file && (
          <Button
            variant="ghost"
            type="button"
            onClick={handleClear}
            className={styles.button}
          >
            <img src={closeIcon} alt="닫기" />
          </Button>
        )}
      </div>
    </>
  );
}

export default FileInput;
