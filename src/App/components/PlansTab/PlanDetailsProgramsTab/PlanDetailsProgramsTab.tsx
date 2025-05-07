import React, { useState } from "react";
import {
  ListColumnData,
  ProgramDetailsData,
  SortData,
  getDetailsLayoutAttributes,
  TouSearchData,
  IInputData,
  PlanRowData,
} from "../../../shared/types";
import CustomList from "../../CustomList/CustomList";
import Scripts from "../../../shared/utils/clientScripts";
import { onClickDownloadFile, useMapState } from "../../../shared/utils/utils";
import ProgramDetails from "../ProgramDetails/ProgramDetails";

class ProgramsTabProps {
  data: PlanRowData;
}

/** Форма редактирования/просмотра плана страхования */
function PlanDetailsProgramsTab(props: ProgramsTabProps) {
  const { data } = props;

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
      code: "fileId",
			fixedWidth: '56px',
      isIcon: true,
      isLink: true,
      onClick: onClickDownloadFile,
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
      <div className="plan-details__programs">
        <CustomList
          getDetailsLayout={getProgramDetailsLayout}
          columnsSettings={columns}
          getDataHandler={getProgramms}
          isScrollable={false}
        />
      </div>
    </>
  );
}

export default PlanDetailsProgramsTab;
