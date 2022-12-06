import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light:   {
                primary: '#009688',
                secondary: '#2196f3',
                accent: '#3f51b5',
                error: '#f44336',
                warning: '#ffc107',
                info: '#673ab7',
                success: '#4caf50'
                }
        }
    }
});
