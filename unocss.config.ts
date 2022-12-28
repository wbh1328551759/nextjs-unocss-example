import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetMini,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini()
  ],

});
