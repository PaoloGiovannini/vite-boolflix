import { reactive } from 'vue';

export const store = reactive(
    {
       filmArray: [],
       serieArray: [],
       search: '',
       castArray: [],
       castSerie: [],
       genresArray:[]
    }
);