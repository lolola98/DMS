import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/assets/sass/_index.scss';
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false, // dark theme 제외
        default: 'light',
        themes: {
          // light 모드 적용시 스타일 지정
          light: {
            primary: '#7260FF',
            primaryLight: '#E9E6FE',
            primaryDark: '#020541',
            btnBlack: '#35363B',
            gray: '#5A5A5A',
            secondary: '#9FA3A8',
            accent: '#82B1FF',
            error: '#EF4242',
            info: '#2196F3',
            success: '#1CC966',
            warning: '#FB8C00',
            inputBG: '#fcfcfc',
            selectedBlue: '#1251fc',
            white: '#fff',
          },
        },
      },
});
