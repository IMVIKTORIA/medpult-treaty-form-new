import React, { useEffect, useState, useRef } from "react";
import icons from "../../../shared/icons";
import { FilesData } from "../../../shared/types";

function FilesDropdown({
  files,
  position,
  onSelect,
  onClose,
}: {
  files: FilesData[];
  position: { top: number; left: number };
  onSelect: (file: FilesData) => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие выпадающего списка при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="files-dropdown"
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: position.top + "px",
        zIndex: 999,
      }}
    >
      {files.map((file, index) => (
        <div
          key={index}
          className="files-dropdown__item"
          onClick={() => onSelect(file)}
        >
          <span style={{ flex: "1.5 1 0" }}>{file.nameFiles.value}</span>
          <span style={{ flex: "1 1 0", color: "#959599" }}>
            {file.dateFiles.value}
          </span>
          <span style={{ width: "30px" }}>{icons.Download}</span>
        </div>
      ))}
    </div>
  );
}

export default FilesDropdown;
