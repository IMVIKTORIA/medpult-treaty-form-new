import React, { useState } from "react";
import {
  ListColumnData,
  ProgramDetailsData,
  SortData,
  getDetailsLayoutAttributes,
  TouSearchData,
  IInputData,
  PlanRowData,
  FilesData,
} from "../../../shared/types";
import CustomList from "../../CustomList/CustomList";
import Scripts from "../../../shared/utils/clientScripts";
import {
  onClickDownloadFileByUrl,
  useMapState,
} from "../../../shared/utils/utils";
import ProgramDetails from "../ProgramDetails/ProgramDetails";
import FilesDropdown from "../../FilesTab/FilesDropdown/FilesDropdown";

class ProgramsTabProps {
  data: PlanRowData;
}

function PlanDetailsProgramsTab(props: ProgramsTabProps) {
  const { data } = props;
  const [dropdownFiles, setDropdownFiles] = useState<FilesData[] | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  function handleDownloadFile(file: FilesData) {
    onClickDownloadFileByUrl(file.fileDownloadURL, file.nameFiles.value);
  }

  /** Обработчик клика по иконке файла */
  const handleFileIconClick = (event: React.MouseEvent, rowData: any) => {
    event.stopPropagation();

    const files = rowData.attachments || rowData.files || [];
    if (files.length === 0) return;

    const iconRect = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const container = document.querySelector(".plan-details__programs");

    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const dropdownX = iconRect.left - containerRect.left;
    const dropdownY = iconRect.bottom - containerRect.top;

    setDropdownFiles(files);
    setDropdownPosition({ top: dropdownY, left: dropdownX });
  };

  /** Обработчик выбора файла из выпадающего списка */
  const handleFileSelect = (file: FilesData) => {
    handleDownloadFile(file);
    setDropdownFiles(null);
  };

  const handleCloseDropdown = () => {
    setDropdownFiles(null);
  };
  /** Колонки списка программ */
  const columns = [
    new ListColumnData({
      name: "номер",
      code: "number",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "наименование",
      code: "title",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "маркетинговое наименование",
      code: "marketingTitle",
      fr: 2,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Тип программы страхования",
      code: "typeProgramm",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Риск/Спец.Риск",
      code: "risk",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "",
      code: "files",
      fixedWidth: "56px",
      isIcon: true,
      isLink: true,
      onClick: (data: any, event?: React.MouseEvent) => {
        if (event) handleFileIconClick(event, { files: data });
      },
    }),
  ];

  /** Получение программ по идентификатору плана */
  const getProgramms = (page: number, sortData: SortData) => {
    return Scripts.getPrograms(data.id, sortData);
  };

  // Данные формы деталей плана
  const [programValues, setProgramValue, setProgramValues] =
    useMapState<ProgramDetailsData>(new ProgramDetailsData());

  /** Получение формы детальной информации по строке списка Программ страхования */
  const getProgramDetailsLayout = ({
    rowData,
    reloadData,
    onClickRowHandler,
  }: getDetailsLayoutAttributes) => {
    return (
      <ProgramDetails
        reloadData={reloadData}
        columnsSettings={columns}
        data={rowData}
        values={programValues}
        setValue={setProgramValue}
        setValues={setProgramValues}
        onClickRowHandler={onClickRowHandler}
      />
    );
  };

  const [touValues, setTouValues] = useState<TouSearchData>(
    new TouSearchData()
  );
  /** Установка значения поля поиска ТOУ */
  const setValueSearch = (name: string, value: IInputData) => {
    setTouValues({ ...touValues, [name]: value });
  };

  return (
    <>
      <div
        className="plan-details__programs"
        style={{ position: "relative", overflow: "visible" }}
      >
        <CustomList
          getDetailsLayout={getProgramDetailsLayout}
          columnsSettings={columns}
          getDataHandler={getProgramms}
          isScrollable={false}
        />
        {dropdownFiles && dropdownPosition && (
          <FilesDropdown
            files={dropdownFiles}
            position={dropdownPosition}
            onSelect={handleFileSelect}
            onClose={handleCloseDropdown}
          />
        )}
      </div>
    </>
  );
}

export default PlanDetailsProgramsTab;
