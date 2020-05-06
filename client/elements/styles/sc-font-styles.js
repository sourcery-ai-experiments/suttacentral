import '@polymer/polymer/lib/elements/custom-style.js';

const template=document.createElement('template');

template.innerHTML=` <custom-style > <style > @font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-Rg_2.004.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-Bd_2.004.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-It_2.004.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Regular_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Bold_3.007.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Italic_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: "Skolar Devanagari";
    src: url('/files/fonts/RaloksDevanagari-Regular_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Devanagari";
    src: url('/files/fonts/RaloksDevanagari-Bold_3.007.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Thai';
    src: local('Noto Serif Thai Regular'), local('NotoSerifThai-Regular'),
    url('/files/fonts/NotoSerifThai-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Myanmar';
    src: local('Noto Serif Myanmar Bold'), local('NotoSerifMyanmar-Bold'),
    url('/files/fonts/NotoSerifMyanmar-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
    url('/files/fonts/NotoSans-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Regular'), local('NotoSans-Regular'),
    url('/files/fonts/NotoSans-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Myanmar';
    src: local('Noto Sans Myanmar Regular'), local('NotoSansMyanmar-Regular'),
    url('/files/fonts/NotoSansMyanmar-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Devanagari';
    src: local('Noto Sans Devanagari Regular'), local('NotoSansDevanagari-Regular'),
    url('/files/fonts/NotoSansDevanagari-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Hebrew';
    src: local('Noto Sans Hebrew Bold'), local('NotoSansHebrew-Bold'),
    url('/files/fonts/NotoSansHebrew-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tamil';
    src: local('Noto Sans Tamil Bold'), local('NotoSansTamil-Bold'),
    url('/files/fonts/NotoSansTamil-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Arabic';
    src: local('Noto Sans Arabic Regular'), local('NotoSansArabic-Regular'),
    url('/files/fonts/NotoSansArabic-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Hebrew';
    src: local('Noto Serif Hebrew Bold'), local('NotoSerifHebrew-Bold'),
    url('/files/fonts/NotoSerifHebrew-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Sinhala';
    src: local('Noto Serif Sinhala Regular'), local('NotoSerifSinhala-Regular'),
    url('/files/fonts/NotoSerifSinhala-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tibetan';
    src: local('Noto Sans Tibetan'), local('NotoSansTibetan'),
    url('/files/fonts/NotoSansTibetan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Sinhala';
    src: local('Noto Sans Sinhala Bold'), local('NotoSansSinhala-Bold'),
    url('/files/fonts/NotoSansSinhala-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tibetan';
    src: local('Noto Sans Tibetan Bold'), local('NotoSansTibetan-Bold'),
    url('/files/fonts/NotoSansTibetan-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tamil';
    src: local('Noto Sans Tamil Regular'), local('NotoSansTamil-Regular'),
    url('/files/fonts/NotoSansTamil-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Tamil';
    src: local('Noto Serif Tamil Bold'), local('NotoSerifTamil-Bold'),
    url('/files/fonts/NotoSerifTamil-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Tamil';
    src: local('Noto Serif Tamil Regular'), local('NotoSerifTamil-Regular'),
    url('/files/fonts/NotoSerifTamil-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Bengali';
    src: local('Noto Sans Bengali Regular'), local('NotoSansBengali-Regular'),
    url('/files/fonts/NotoSansBengali-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Bengali';
    src: local('Noto Sans Bengali Bold'), local('NotoSansBengali-Bold'),
    url('/files/fonts/NotoSansBengali-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Bengali';
    src: local('Noto Serif Bengali Bold'), local('NotoSerifBengali-Bold'),
    url('/files/fonts/NotoSerifBengali-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Bengali';
    src: local('Noto Serif Bengali Regular'), local('NotoSerifBengali-Regular'),
    url('/files/fonts/NotoSerifBengali-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Thai';
    src: local('Noto Serif Thai Bold'), local('NotoSerifThai-Bold'),
    url('/files/fonts/NotoSerifThai-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Naskh Arabic';
    src: local('Noto Naskh Arabic Bold'), local('NotoNaskhArabic-Bold'),
    url('/files/fonts/NotoNaskhArabic-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Sinhala';
    src: local('Noto Serif Sinhala Bold'), local('NotoSerifSinhala-Bold'),
    url('/files/fonts/NotoSerifSinhala-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Myanmar';
    src: local('Noto Serif Myanmar Regular'), local('NotoSerifMyanmar-Regular'),
    url('/files/fonts/NotoSerifMyanmar-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Hebrew';
    src: local('Noto Sans Hebrew Regular'), local('NotoSansHebrew-Regular'),
    url('/files/fonts/NotoSansHebrew-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Thai';
    src: local('Noto Sans Thai Bold'), local('NotoSansThai-Bold'),
    url('/files/fonts/NotoSansThai-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Italic'), local('NotoSans-Italic'),
    url('/files/fonts/NotoSans-Italic.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Noto Sans Myanmar';
    src: local('Noto Sans Myanmar Bold'), local('NotoSansMyanmar-Bold'),
    url('/files/fonts/NotoSansMyanmar-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Devanagari';
    src: local('Noto Sans Devanagari Bold'), local('NotoSansDevanagari-Bold'),
    url('/files/fonts/NotoSansDevanagari-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Sinhala';
    src: local('Noto Sans Sinhala Regular'), local('NotoSansSinhala-Regular'),
    url('/files/fonts/NotoSansSinhala-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Naskh Arabic';
    src: local('Noto Naskh Arabic'), local('NotoNaskhArabic'),
    url('/files/fonts/NotoNaskhArabic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Hebrew';
    src: local('Noto Serif Hebrew Regular'), local('NotoSerifHebrew-Regular'),
    url('/files/fonts/NotoSerifHebrew-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif';
    src: local('Noto Serif Bold'), local('NotoSerif-Bold'),
    url('/files/fonts/NotoSerif-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Thai';
    src: local('Noto Sans Thai Regular'), local('NotoSansThai-Regular'),
    url('/files/fonts/NotoSansThai-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif';
    src: local('Noto Serif Regular'), local('NotoSerif-Regular'),
    url('/files/fonts/NotoSerif-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Arabic';
    src: local('Noto Sans Arabic Bold'), local('NotoSansArabic-Bold'),
    url('/files/fonts/NotoSansArabic-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Tengwar Annatar Italic";
    src: url('/files/fonts/tngani.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Klingon";
    src: url('/files/fonts/Klingon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Vulcan";
    src: url('/files/fonts/Vulcan.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Aurebesh";
    src: url('/files/fonts/Aurebesh.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK JP';
    src: url('/files/fonts/noto-sans-jp_regular_jp_462a49732c9d.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK JP';
    src: url('/files/fonts/noto-sans-jp_bold_jp_e5ebd509a112.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK KR';
    src: url('/files/fonts/noto-sans-kr_regular_ko_92fbb158dfd5.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK KR';
    src: url('/files/fonts/noto-sans-kr_bold_ko_94d8d803ed69.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK TC';
    src: url('/files/fonts/noto-sans-tc_regular_zh_lzh_785da7cebd0b.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK TC';
    src: url('/files/fonts/noto-sans-tc_bold_zh_lzh_bbcfc9a4d4b2.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK SC';
    src: url('/files/fonts/noto-sans-sc_regular_zh_lzh_b3bccbd8d25b.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK SC';
    src: url('/files/fonts/noto-sans-sc_bold_zh_lzh_f57371fc2dca.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}


html {
    --sc-skolar-font-scale: 1.13;

    --sc-tall-font-scale: 1.13;

    --sc-dense-font-scale: 1.13;

    --sc-sans-font: "Skolar Sans PE", "Noto Sans", sans-serif;

    --sc-serif-font: "Skolar PE", "Noto Serif", "Skolar Sans PE", "Noto Sans", serif;
    
    --sc-monospace-font: "Source Code Pro", monospace;

    --sc-noto-sans-font: "Noto Sans", sans-serif;

    --sc-arabic-sans-font: "Noto Sans Arabic", "Noto Sans", sans-serif;

    --sc-arabic-serif-font: "Noto Naskh Arabic", "Noto Serif", "Noto Sans Arabic", "Noto Sans", serif;

    --sc-hebrew-sans-font: "Noto Sans Hebrew", "Noto Sans", sans-serif;

    --sc-hebrew-serif-font: "Noto Serif Hebrew", "Noto Serif", "Noto Sans Hebrew", "Noto Sans", serif;

    --sc-devanagari-sans-font: "Noto Sans Devanagari", "Noto Sans", sans-serif;

    --sc-devanagari-serif-font: "Skolar Devanagari", "Skolar PE", "Noto Serif", "Noto Sans Devanagari", "Noto Sans", serif;

    --sc-myanmar-sans-font: "Noto Sans Myanmar", "Noto Sans", sans-serif;

    --sc-myanmar-serif-font: "Noto Serif Myanmar", "Noto Serif", "Noto Sans Myanmar", "Noto Sans", serif;

    --sc-sinhala-sans-font: "Noto Sans Sinhala", "Noto Sans", sans-serif;

    --sc-sinhala-serif-font: "Noto Serif Sinhala", "Noto Serif", "Noto Sans Sinhala", "Noto Sans", serif;

    --sc-tamil-sans-font: "Noto Sans Tamil", "Noto Sans", sans-serif;

    --sc-tamil-serif-font: "Noto Serif Tamil", "Noto Serif", "Noto Sans Tamil", "Noto Sans", serif;

    --sc-bengali-sans-font: "Noto Sans Bengali", "Noto Sans", sans-serif;

    --sc-bengali-serif-font: "Noto Serif Bengali", "Noto Serif", "Noto Sans", serif;

    --sc-thai-sans-font: "Noto Sans Thai", "Noto Sans", sans-serif;

    --sc-thai-serif-font: "Noto Serif Thai", "Noto Serif", "Noto Sans Thai", "Noto Sans", serif;

    --sc-tibetan-font: "Noto Sans Tibetan", "Noto Sans", sans-serif;

    --sc-tengwar-font: "Tengwar Annatar Italic", sans-serif;

    --sc-klingon-font: "Klingon", sans-serif;

    --sc-vulcan-font: "Vulcan", sans-serif;

    --sc-aurebesh-font: "Aurebesh", sans-serif;

    --sc-japanese-font: "Noto Sans CJK JP", "Noto Sans", sans-serif;

    --sc-korean-font: "Noto Sans CJK KR", "Noto Sans", sans-serif;

    --sc-traditional-chinese-font: "Noto Sans CJK TC", "Noto Sans", sans-serif;

    --sc-simple-chinese-font: "Noto Sans CJK SC", "Noto Sans", sans-serif;

    --sc-skolar-font-size-xxs: calc(10px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-xs: calc(12px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-s: calc(14px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-md: calc(16px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-l: calc(18px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-xl: calc(19px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-static-subtitle: calc(24px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-dialog-header: calc(26px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-xxl: calc(32px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-h1-md: calc(34px * var(--sc-skolar-font-scale));

    --sc-skolar-font-size-static-main-title: calc(50px * var(--sc-skolar-font-scale));

    --sc-tall-font-size-xs: calc(13px * var(--sc-tall-font-scale));

    --sc-tall-font-size-s: calc(15px * var(--sc-tall-font-scale));
        
    --sc-tall-font-size-md: calc(17px * var(--sc-tall-font-scale));
 
    --sc-tall-font-size-l: calc(19px * var(--sc-tall-font-scale));

    --sc-tall-font-size-xl: calc(20px * var(--sc-tall-font-scale));

    --sc-tall-font-size-static-subtitle: calc(24px * var(--sc-tall-font-scale));

    --sc-tall-font-size-dialog-header: calc(26px * var(--sc-tall-font-scale));

    --sc-tall-font-size-xxl: calc(32px * var(--sc-tall-font-scale));

    --sc-tall-font-size-h1-md: calc(34px * var(--sc-tall-font-scale));

    --sc-tall-font-size-static-main-title: calc(50px * var(--sc-tall-font-scale));

    --sc-dense-font-size-xs: calc(13px * var(--sc-dense-font-scale));

    --sc-dense-font-size-s: calc(15px * var(--sc-dense-font-scale));

    --sc-dense-font-size-md: calc(17px * var(--sc-dense-font-scale));

    --sc-dense-font-size-l: calc(19px * var(--sc-dense-font-scale));

    --sc-dense-font-size-xl: calc(20px * var(--sc-dense-font-scale));

    --sc-dense-font-size-static-subtitle: calc(24px * var(--sc-dense-font-scale));

    --sc-dense-font-size-dialog-header: calc(26px * var(--sc-dense-font-scale));

    --sc-dense-font-size-xxl: calc(32px * var(--sc-dense-font-scale));

    --sc-dense-font-size-h1-md: calc(34px * var(--sc-dense-font-scale));

--sc-caps-letter-spacing: 0.02em;

/*temporary hack for paper elements*/
--paper-font-common-base_-_font-family: var(--sc-sans-font)!important;

}
</style > </custom-style > `;

document.head.appendChild(template.content);