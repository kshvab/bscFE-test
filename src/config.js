const tagsTypes = {
  content: 'success',
  smm: 'warning',
  design: 'info',
  dev: 'dark'
};

const agents = ['Dave', 'Sam', 'Monika', 'Kate'];

const apiPath = 'http://svarka.club/shvabapi';

const strings = {
  EN: {
    siteName: '.BSC Task',
    shortLang: 'EN',
    pageNameHome: 'Home',
    pageNameList: 'List',
    tags: 'Tags',
    agent: 'Agent',
    search: 'Search',
    toDo: 'To do',
    inWork: 'In work',
    done: 'Done',

    cancel: 'Cancel',
    title: 'Title',
    description: 'Description',
    fullText: 'Full text',
    close: 'Close',
    save: 'Save',
    addTask: 'Add Task',
    selectAnAgent: 'Select an agent',
    editTask: 'Edit Task',
    pageNameDrugNDrop: 'DrugAndDrop Tests'
  },
  CZ: {
    siteName: '.BSC Úkol',
    shortLang: 'CZ',
    pageNameHome: 'Hlavní strana',
    pageNameList: 'Seznam',
    tags: 'Značky',
    agent: 'Agent',
    search: 'Hledání',
    toDo: 'Plán',
    inWork: 'V práci',
    done: 'Hotovo',
    cancel: 'Zrušit',

    title: 'Titul',
    description: 'Popis',
    fullText: 'Celý text',
    close: 'Zavřít',
    save: 'Uložit',
    addTask: 'Přidat úkol',
    selectAnAgent: 'Vyberte agenta',
    editTask: 'Upravit úlohu',
    pageNameDrugNDrop: 'DrugAndDrop Tests'
  }
};
export { tagsTypes, strings, agents, apiPath };
