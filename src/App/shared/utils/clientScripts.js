import {
  FileFullData,
  FilesData,
  InputDataCategory,
  InputDataString,
  InsuredDetailsData,
} from "../types";
import typedScripts from "./typedClientScripts";

/** Заглушка ожидания ответа сервера */
function randomDelay() {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Получение списка продуктов */
async function getProducts() {
  const data = [
    {
      value: "placeholder 1",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "placeholder 2",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "placeholder 3",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение списка каналов */
async function getChannels() {
  const data = [
    {
      value: "СБОЛ",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "БУБУБУ",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "ВСТАВИТЬ ТЕКСТ",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение списка валют */
async function getCurrencies() {
  const data = [
    {
      value: "RUB",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "USD",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "EUR",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение списка статусов */
async function getStatuses() {
  const data = [
    {
      value: "RUB",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "USD",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "EUR",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение списка статусов */
async function saveTreaty(data) {
  await randomDelay();
  console.log(data);
}

/** Получение списка статусов */
async function getTreaty() {
  const data = {
    treaty: {
      value: "test",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    number: {
      value: "test",
    },
    policyHolder: {
      value: "test",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    objProduct: {
      value: "Aenean tellus elit leo consectetur",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    channel: {
      value: "channelTest",
      data: {
        code: "channelTest",
      },
    },
    regionImprisonment: {
      value: "test",
    },
    currency: {
      value: "currencyTest",
      data: {
        code: "currencyTest",
      },
    },
    status: {
      value: "Еще статус",
      data: {
        code: "eshe_status",
      },
    },
    conclusionDate: {
      value: "28.03.2024",
    },
    startDate: {
      value: "28.03.2024",
    },
    endDate: {
      value: "28.03.2024",
    },
    insuranceAmount: {
      value: "",
    },
    insuranceAmountRub: {
      value: "",
    },
    insurancePremium: {
      value: "",
    },
    insurancePremiumRub: {
      value: "",
    },
    sides: [
      {
        isEdit: false,
        originalData: {
          type: {
            value: "Менеджер договора",
            data: {
              code: "manager",
            },
          },
          contractor: {
            value: "Иванов Иван Иванович",
          },
        },
        actualData: {
          type: {
            value: "Менеджер договора",
            data: {
              code: "manager",
            },
          },
          contractor: {
            value: "Иванов Иван Иванович",
          },
        },
      },
      {
        isEdit: false,
        originalData: {
          type: {
            value: "Медицинский куратор",
            data: {
              code: "medical",
            },
          },
          contractor: {
            value: "Петров Петр Петрович",
            data: {
              code: "42515215",
            },
          },
        },
        actualData: {
          type: {
            value: "Медицинский куратор",
            data: {
              code: "medical",
            },
          },
          contractor: {
            value: "Петров Петр Петрович",
            data: {
              code: "42515215",
            },
          },
        },
      },
      {
        isEdit: true,
        originalData: {
          type: {
            value: "Технический куратор",
            data: {
              code: "technical",
            },
          },
          contractor: {
            value: "Плюшкин Лев Николаевич",
            data: {
              code: "4643645654",
            },
          },
        },
        actualData: {
          type: {
            value: "Технический куратор",
            data: {
              code: "technical",
            },
          },
          contractor: {
            value: "Плюшкин Лев Николаевич",
            data: {
              code: "4643645654",
            },
          },
        },
      },
    ],
  };
  await randomDelay();
  return data;
}

/** Получение списка статусов */
async function getTreatyLPU() {
  const data = {
    treaty: {
      value: "test",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    number: {
      value: "test",
    },
    policyHolder: {
      value: "test",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    objProduct: {
      value: "Aenean tellus elit leo consectetur",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
    channel: {
      value: "channelTest",
      data: {
        code: "channelTest",
      },
    },
    regionImprisonment: {
      value: "test",
    },
    currency: {
      value: "currencyTest",
      data: {
        code: "currencyTest",
      },
    },
    status: {
      value: "Еще статус",
      data: {
        code: "eshe_status",
      },
    },
    conclusionDate: {
      value: "28.03.2024",
    },
    startDate: {
      value: "28.03.2024",
    },
    endDate: {
      value: "28.03.2024",
    },
    insuranceAmount: {
      value: "",
    },
    insuranceAmountRub: {
      value: "",
    },
    insurancePremium: {
      value: "",
    },
    insurancePremiumRub: {
      value: "",
    },
    sides: [
      {
        isEdit: false,
        originalData: {
          type: {
            value: "Менеджер договора",
            data: {
              code: "manager",
            },
          },
          contractor: {
            value: "Иванов Иван Иванович",
            data: {
              code: "123456",
            },
          },
        },
        actualData: {
          type: {
            value: "Менеджер договора",
            data: {
              code: "manager",
            },
          },
          contractor: {
            value: "Иванов Иван Иванович",
            data: {
              code: "123456",
            },
          },
        },
      },
      {
        isEdit: false,
        originalData: {
          type: {
            value: "Медицинский куратор",
            data: {
              code: "medical",
            },
          },
          contractor: {
            value: "Петров Петр Петрович",
            data: {
              code: "42515215",
            },
          },
        },
        actualData: {
          type: {
            value: "Медицинский куратор",
            data: {
              code: "medical",
            },
          },
          contractor: {
            value: "Петров Петр Петрович",
            data: {
              code: "42515215",
            },
          },
        },
      },
      {
        isEdit: true,
        originalData: {
          type: {
            value: "Технический куратор",
            data: {
              code: "technical",
            },
          },
          contractor: {
            value: "Плюшкин Лев Николаевич",
            data: {
              code: "4643645654",
            },
          },
        },
        actualData: {
          type: {
            value: "Технический куратор",
            data: {
              code: "technical",
            },
          },
          contractor: {
            value: "Плюшкин Лев Николаевич",
            data: {
              code: "4643645654",
            },
          },
        },
      },
    ],
  };
  await randomDelay();
  return data;
}

/** Получение ссылки на форму отбора контрагента */
const getSelectContractorPageLink = () => {
  const pageLink = "#test";
  return pageLink + "?field_id=medpult-treaty-policy-holder";
};

/** Получение ссылки на форму отбора контрагента (Для выбора ЛПУ) */
const getSelectLPULink = () => {
  const pageLink = "#test";
  return pageLink + "?field_id=medpult-treaty-lpu";
};

/** Получение ссылки на форму отбора контрагента (Для выбора ответственного лица) */
function getSelectContractorPageLinkResponsible(index) {
  const pageLink = "#test";
  return pageLink + `?field_id=medpult-treaty-responsible&&index=${index}`;
}

/** Получение ссылки на форму контрагента */
function getContractorPageLink() {
  const pageLink = "#test";
  return pageLink;
}

/** Получение подсказок по адресу */
const getAddressSuggestion = async (value) => {
  const addresses = [
    {
      value: "г Полный адрес, улица Полная, д12 кв34",
      data: {
        isFull: true,
      },
    },
    {
      value: "г Неполный адрес",
      data: {
        isFull: false,
      },
    },
  ];
  await randomDelay();
  return addresses;
};

/** Получение типов ответственного лица */
const getResponsibleTypes = async (value) => {
  const types = [
    {
      value: "Менеджер договора",
      data: {
        code: "manager",
      },
    },
    {
      value: "Медицинский куратор",
      data: {
        code: "medical",
      },
    },
    {
      value: "Технический куратор",
      data: {
        code: "technical",
      },
    },
  ];
  await randomDelay();
  return types;
};

/** Получение контрагентов */
const getContractors = async (page) => {
  const mockData = {
    id: "1",
    fullname: {
      value: "Иванов Иван Иванович",
      data: {
        code: "test",
      },
    },
    birthDate: {
      value: "22.22.2222",
    },
    policyNumber: {
      value: "22.22.2222",
    },
    category: {
      value: "Gold",
      data: {
        code: "test",
      },
    },
    startDate: {
      value: "22.22.2222",
    },
    endDate: {
      value: "22.22.2222",
    },
    plan: {
      value: "ОНКО-ТКМ-МИР-Г-0-17",
    },
    additionalAgreement: {
      value: "001СБС00123456/2023ДМС-00",
    },
  };

  await randomDelay();
  return {
    data: Array(20)
      .fill()
      .map((data, index) => {
        return {
          ...mockData,
          id: index,
          files:
            Math.random() > 0.5
              ? [
                  {
                    ...new FilesData(),
                    fileDownloadURL:
                      "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
                    nameFiles: new InputDataString("file1"),
                  },
                  {
                    ...new FilesData(),
                    fileDownloadURL:
                      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
                    nameFiles: new InputDataString("file2"),
                  },
                ]
              : [],
        };
      }),
    hasMore: true,
  };
};

/** Получение планов страхования */
const getPlans = async (page) => {
  const mockData = {
    number: {
      value: "План 12345",
      data: {
        code: "test",
      },
    },
    title: {
      value: "ОНКО-ТКМ-МИР-Г-0-17",
    },
    type: {
      value: "Родительский",
      data: {
        code: "parent",
      },
    },
    age: {
      value: "от 18 до 48 лет",
    },
    startDate: {
      value: "22.22.2222",
    },
    endDate: {
      value: "22.22.2222",
    },
    parentPlan: {
      value: "ОНКО-ТКМ-МИР-Г-0-17",
      data: {
        code: "test",
      },
    },
    additionalAgreement: {
      value: "001СБС00123456/2023ДМС",
    },
  };

  await randomDelay();
  return {
    data: Array(20)
      .fill()
      .map((data, index) => {
        return { ...mockData, id: index };
      }),
    hasMore: false,
  };
};

/** Получение программ по идентификатору плана */
async function getPrograms(planId, sortData) {
  await randomDelay();
  const mockData = {
    number: {
      value: "IP000169/23",
    },
    title: {
      value: "Онко ТКМ",
    },
    marketingTitle: {
      value: "Лечение онкологии и трансплантация костного мозга",
    },
    typeProgramm: {
      value: "Онко ТКМ",
    },
    risk: {
      value: "Онко ТКМ",
    },
    fileDownloadUrls: [
      "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
    ],
    files: [],
  };

  return {
    data: Array(20)
      .fill()
      .map((data, index) => {
        return {
          ...mockData,
          id: index,
          fileId: Math.random() > 0.5 ? "test_id" : undefined,
          files:
            Math.random() > 0.5
              ? [
                  {
                    ...new FilesData(),
                    fileDownloadURL:
                      "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
                    nameFiles: new InputDataString("file1"),
                  },
                  {
                    ...new FilesData(),
                    fileDownloadURL:
                      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
                    nameFiles: new InputDataString("file2"),
                  },
                ]
              : [],
        };
      }),
    hasMore: false,
  };
}

/** Получить единицы измерения возраста */
async function getAgeMeasurements() {
  return [new InputDataString("лет"), new InputDataString("мес")];
}

/** Получение полных данных плана по идентификатору */
async function getPlanFulldata(id) {
  const data = {
    planNumber: {
      value: "План 654321",
    },
    startDate: {
      value: "10.01.2024",
    },
    endDate: {
      value: "31.12.2024",
    },
    // 'insuranceType': {
    // 	'value': '',
    // 	'data': {
    // 		'code': '',
    // 	},
    // },
    insuranceType: [
      {
        value: "Взрослые",
        data: {
          code: "adult",
        },
      },
      {
        value: "Взрослые2",
        data: {
          code: "adult2",
        },
      },
      {
        value: "Взрослые4",
        data: {
          code: "adult4",
        },
      },
      // {
      // 	'value':
      // 		'Взрослыефпфтпофыпфпполфполфрпфыпфлрдыпдлрфдлфдлрыпдрлфдрлпыafasfaskfhashgilahghasgasghakgsagksgkjakhgsahkagkjaskg',
      // 	'data': {
      // 		'code': 'long',
      // 	},
      // },
    ],
    ageFactor: {
      value: "",
    },
    startAge: {
      value: "0",
    },
    startAgeMeasurement: {
      value: "лет",
      data: {},
    },
    endAge: {
      value: "17",
    },
    endAgeMeasurement: {
      value: "лет",
      data: {},
    },
    insurancePremium: {
      value: "820,22",
    },
    name: {
      value: "ОНКО-ТКМ-МИР-Г-0-18",
    },
    previousPlan: {
      value: "",
    },
    relativeFactor: {
      value: "",
    },
    insuranceAmount: {
      value: "26000000,00",
    },
    type: {
      value: "",
    },
    parentPlan: {
      value: "",
    },
    region: [
      "Московская область",
      "Ленинградская область",
      "Удмуртская республика, г Ижевск",
    ],
    medicalFactor: {
      value: "",
    },
    regionExt: [
      "Московская область",
      "Ленинградская область",
      "Московская область",
    ],
  };

  await randomDelay();
  return data;
}

/** Получение типов ЗХ */
async function getInsuranceTypes(query) {
  const data = [
    new InputDataCategory("Дети", "child"),
    new InputDataCategory("Взрослые", "adult"),
    new InputDataCategory("Взрослые1", "adult1"),
    new InputDataCategory("Взрослые2", "adult2"),
    new InputDataCategory("Взрослые3", "adult3"),
    new InputDataCategory("Взрослые4", "adult4"),
    new InputDataCategory(
      "Взрослыефпфтпофыпфпполфполфрпфыпфлрдыпдлрфдлфдлрыпдрлфдрлпыafasfaskfhashgilahghasgasghakgsagksgkjakhgsahkagkjaskg",
      "long"
    ),
  ];

  await randomDelay();
  return data;
}

/** Получение типов плана */
async function getPlanTypes() {
  const data = [
    new InputDataCategory("Индивидуальный", "individual"),
    new InputDataCategory("Родительский", "parent"),
  ];

  await randomDelay();
  return data;
}

/** Получение Родительских планов */
async function getParentPlans() {
  const data = [new InputDataString("ОНКО-ТКМ-МИР-Г-0-17")];

  await randomDelay();
  return data;
}

/** Создание Плана страхования */
async function createPlan(values) {
  console.log(values);
  await randomDelay();
}

/** Сохранение Плана страхования */
async function savePlan(id, values) {
  await randomDelay();
}

/** Получение типов договора */
async function getContractTypes() {
  const data = [
    {
      value: "contractTyp1",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "contractTyp11",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "contractTyp111",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение типов риска */
async function getRiskTypes() {
  const data = [
    {
      value: "Риск",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "Спец.риск",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение типов программы страхования */
async function getProgramTypes() {
  const data = [
    {
      value: "Фактический",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "Тест",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "Тест2",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3102",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение рисков по идентификатору программы */
async function getRisks(planId, sortData) {
  await randomDelay();
  const mockData = {
    name: {
      value: "Онко",
    },
    riskAmount: {
      value: "2 622,06",
    },
    insuranceAmount: {
      value: "6 000 000,00",
    },
    timeFranchise: {
      value: "90",
    },
    riskFranchise: {
      value: "0,00",
    },
  };

  return {
    data: Array(2)
      .fill()
      .map((data, index) => {
        return { ...mockData, id: index };
      }),
    hasMore: false,
  };
}

/** Получение полных данных программы по идентификатору */
async function getProgramFulldata(id) {
  const data = {
    name: {
      value: "Онко ТКМ",
    },
    number: {
      value: "IP000169/23",
    },
    marketingName: {
      value: "testMarketingName",
    },
    riskType: {
      value: "Риск",
      data: {
        code: "1234124",
      },
    },
    type: {
      value: "",
      data: {
        code: "",
      },
    },
    currency: {
      value: "RUB",
      data: {
        code: "lable",
      },
    },
  };

  await randomDelay();
  return data;
}

/** Сохранение Программы страхования */
async function saveProgram(id, values) {
  await randomDelay();
}

/** Получение полных данных застрахованного по идентификатору */
async function getInsuredFulldata(id) {
  const data = {
    fullname: {
      value: "Назаров Антон Алексеевич",
      data: {
        code: "018bfaff-cd9f-e066-2963-01a91bf75063",
      },
    },
    category: {
      value: "Gold",
      data: {
        code: "019082c4-decc-720b-a053-80787f6dc417",
      },
    },
    contractNumber: {
      value: "dasfasfasf",
      data: {
        code: "",
      },
    },
    startDate: {
      value: "04.04.2024",
    },
    endDate: {
      value: "04.04.2024",
    },
    policyNumber: {
      value: "dffdfsdfsdfsdfsd",
    },
    policyStartDate: {
      value: "16.07.2024",
    },
    policyEndDate: {
      value: "27.07.2024",
    },
    currentPlan: {
      value: "test",
      data: {
        code: "0190da00-8d99-7955-b9f4-9432ed0dc511",
      },
    },
    attach: {
      value: "",
      data: {
        code: "SDAD",
      },
    },
    detach: {
      value: "SDSD",
      data: {
        code: "SDSD",
      },
    },
  };

  await randomDelay();
  return data;
}

/** Сохранение Застрахованного */
async function saveInsured(id, values) {
  console.log(values);
  await randomDelay();
}

/** Получение ссылки на форму отбора застрахованных */
function getSelectInsuredPageLinkResponsible() {
  const pageLink = "#testInsured";
  return pageLink + `?field_id=medpult-treaty-contractor`;
}

/** Получение списка категорий полисов */
async function getPolicyCategories() {
  const data = [
    {
      value: "Gold",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "Silver",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "Bronze",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3102",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение рисков по идентификатору застрахованного */
async function getRisksInsured(insuredId, sortData) {
  await randomDelay();
  const mockData = {
    name: {
      value: "Онко",
    },
    riskAmount: {
      value: "2 622,06",
    },
    insuranceAmount: {
      value: "6 000 000,00",
    },
    timeFranchise: {
      value: "90",
    },
    riskFranchise: {
      value: "0,00",
    },
  };

  return {
    data: Array(2)
      .fill()
      .map((data, index) => {
        return { ...mockData, id: index };
      }),
    hasMore: false,
  };
}

/** Получение Договоров по Номеру */
async function getContractsByNumber(query) {
  console.log(query);

  const value = {
    value: "TEST_TREATY",
    data: {
      code: "TEST_TREATY",
      isFull: true,
    },
  };
  const data = [value];

  await randomDelay();
  return data;
}

/** Получение Планов по Номеру */
async function getPlansByNumber(query) {
  console.log(query);

  const value = {
    value: "TEST_TREATY",
    data: {
      code: "TEST_TREATY",
      isFull: true,
    },
  };
  const data = [value];

  await randomDelay();
  return data;
}

/** Получение ДС */
const getAmendments = async (page) => {
  const mockData = {
    /** Идентификатор */
    id: "1",
    /** Номер договора */
    contract: new InputDataCategory("001СБС00123456/2023ДМС", "treaty_id"),
    /** Доп. соглашение */
    amendment: new InputDataCategory("ДС002", "amendment_id"),
    /** Дата подписания */
    conclusionDate: new InputDataString("01.12.2023 12:00:00"),
    /** Тип ДС */
    amendmentType: new InputDataCategory("Изменение условий", "type_id"),
    /** Дата начала */
    startDate: new InputDataString("01.12.2023 12:00:00"),
    /** Дата окончания */
    endDate: new InputDataString("01.12.2023 12:00:00"),
    /** Статус */
    status: new InputDataCategory("Действует", "status_code"),
  };

  await randomDelay();
  return {
    data: Array(20)
      .fill()
      .map((data, index) => {
        return { ...mockData, id: index };
      }),
    hasMore: false,
  };
};

/** Получение полных данных плана по идентификатору */
async function getAmendmentFulldata(id) {
  const mockData = {
    /** Идентификатор */
    id: "1",
    /** Номер договора */
    contract: new InputDataCategory("001СБС00123456/2023ДМС", "treaty_id"),
    /** Доп. соглашение */
    amendment: new InputDataCategory("ДС002", "amendment_id"),
    /** Дата подписания */
    conclusionDate: new InputDataString("01.12.2023 12:00:00"),
    /** Тип ДС */
    amendmentType: new InputDataCategory("Изменение условий", "type_id"),
    /** Дата начала */
    startDate: new InputDataString("01.12.2023 12:00:00"),
    /** Дата окончания */
    endDate: new InputDataString("01.12.2023 12:00:00"),
    /** Статус */
    status: new InputDataCategory("Действует", "status_code"),
  };

  await randomDelay();
  return mockData;
}

/** Сохранение ДС */
async function saveAmendment(id, values) {
  await randomDelay();
}
async function OnInit() {
  await randomDelay();
}

/** Получение видов мед помощи каналов */
async function getSorts() {
  const data = [
    {
      value: "СБОЛ",
      data: {
        code: "018e7fa6-010e-712b-aecd-d07441142e97",
      },
    },
    {
      value: "БУБУБУ",
      data: {
        code: "018e7fa6-46b6-7345-927e-d07cb06e3107",
      },
    },
    {
      value: "ВСТАВИТЬ ТЕКСТ",
      data: {
        code: "018e7fa6-5a9f-7ee2-a81c-1b7ec10031f3",
      },
    },
  ];

  await randomDelay();
  return data;
}

/** Получение ТОУ в планах */
const getPlanServicePoints = async () => {
  const mockData = {
    codeTou: {
      value: "Иванов Иван Иванович",
      data: {
        code: "test",
      },
    },
    nameTou: {
      value: "22.22.2222",
    },
    adress: {
      value: "22.22.2222",
    },
    access: {
      value: "ОНКО-ТКМ-МИР-Г-0-17",
    },
    typeMedical: {
      value: "Gold",
      data: {
        code: "test",
      },
    },
    franchise: {
      value: "ОНКО-ТКМ-МИР-Г-0-17",
    },
    dateInclusion: {
      value: "22.22.2222",
    },
    dateExclusion: {
      value: "22.22.2222",
    },
    contractLpu: {
      value: "001СБС00123456/2023ДМС-00",
    },
  };

  await randomDelay();
  return {
    data: Array(3)
      .fill()
      .map((data, index) => {
        return { ...mockData, id: index };
      }),
    hasMore: false,
  };
};

/** Получить количество вложений по договору*/
async function getFilesCountTreaty() {
  return 5;
}

export default {
  getProducts,
  getChannels,
  getCurrencies,
  getStatuses,
  saveTreaty,
  getTreaty,
  getSelectContractorPageLink,
  getSelectContractorPageLinkResponsible,
  getSelectLPULink,
  getAddressSuggestion,
  getResponsibleTypes,
  getContractors,
  getContractorPageLink,
  getPlans,
  savePlan,
  createPlan,
  getPrograms,
  getAgeMeasurements,
  getPlanFulldata,
  getInsuranceTypes,
  getPlanTypes,
  getParentPlans,
  getTreatyLPU,
  getContractTypes,

  getRiskTypes,
  getProgramTypes,
  getProgramFulldata,
  getRisks,
  saveProgram,

  getInsuredFulldata,
  saveInsured,
  getSelectInsuredPageLinkResponsible,
  getPolicyCategories,
  getRisksInsured,

  getContractsByNumber,
  getPlansByNumber,

  getAmendments,
  getAmendmentFulldata,
  saveAmendment,
  OnInit,
  getFilesCountProgram: getFilesCountTreaty,
  getSorts,
  getPlanServicePoints,

  ...typedScripts,
};
