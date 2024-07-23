//@ts-nocheck
import { css } from "styled-components";
import CryptofontEot from "./cryptofont/cryptofont-webfont.eot";
import CryptofontWoff from "./cryptofont/cryptofont-webfont.woff";
import CryptofontTtf from "./cryptofont/cryptofont-webfont.ttf";
import CryptofontSvg from "./cryptofont/cryptofont-webfont.svg";

export const CryptoFont = css`
    @font-face {
        font-family: CryptoFont;
        src: url(${CryptofontEot});
        src: url(${CryptofontEot}) format("embedded-opentype"),
            url(${CryptofontWoff}) format("woff2"),
            url(${CryptofontWoff}) format("woff"),
            url(${CryptofontTtf}) format("truetype"),
            url(${CryptofontSvg}) format("svg");
        font-weight: 400;
        font-style: normal;
    }
    .cf {
        display: inline-block;
        font: normal normal normal 14px/1 CryptoFont;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .cf-lg {
        font-size: 1.33333333em;
        line-height: 0.75em;
        vertical-align: -15%;
    }
    .cf-2x {
        font-size: 2em;
    }
    .cf-3x {
        font-size: 3em;
    }
    .cf-4x {
        font-size: 4em;
    }
    .cf-5x {
        font-size: 5em;
    }
    .cf-adc:before {
        content: "\f000";
    }
    .cf-aeon:before {
        content: "\f001";
    }
    .cf-amp:before {
        content: "\f002";
    }
    .cf-anc:before {
        content: "\f003";
    }
    .cf-ardr:before {
        content: "\f004";
    }
    .cf-aur:before {
        content: "\f005";
    }
    .cf-bay:before {
        content: "\f006";
    }
    .cf-bcn:before {
        content: "\f007";
    }
    .cf-brk:before {
        content: "\f008";
    }
    .cf-brx:before {
        content: "\f009";
    }
    .cf-bsd:before {
        content: "\f00a";
    }
    .cf-bta:before {
        content: "\f00b";
    }
    .cf-btc:before {
        content: "\f00c";
    }
    .cf-btc-alt:before {
        content: "\f00d";
    }
    .cf-btcd:before {
        content: "\f00e";
    }
    .cf-bts:before {
        content: "\f00f";
    }
    .cf-clam:before {
        content: "\f010";
    }
    .cf-cloak:before {
        content: "\f011";
    }
    .cf-dash:before {
        content: "\f012";
    }
    .cf-dcr:before {
        content: "\f013";
    }
    .cf-dgb:before {
        content: "\f014";
    }
    .cf-dgd:before {
        content: "\f015";
    }
    .cf-dgx:before {
        content: "\f016";
    }
    .cf-dmd:before {
        content: "\f017";
    }
    .cf-doge:before {
        content: "\f018";
    }
    .cf-emc:before {
        content: "\f019";
    }
    .cf-erc:before {
        content: "\f01a";
    }
    .cf-etc:before {
        content: "\f01b";
    }
    .cf-eth:before {
        content: "\f01c";
    }
    .cf-fct:before {
        content: "\f01d";
    }
    .cf-flo:before {
        content: "\f01e";
    }
    .cf-frk:before {
        content: "\f01f";
    }
    .cf-ftc:before {
        content: "\f020";
    }
    .cf-game:before {
        content: "\f021";
    }
    .cf-gld:before {
        content: "\f022";
    }
    .cf-gnt:before {
        content: "\f023";
    }
    .cf-grc:before {
        content: "\f024";
    }
    .cf-grs:before {
        content: "\f025";
    }
    .cf-heat:before {
        content: "\f026";
    }
    .cf-icn:before {
        content: "\f027";
    }
    .cf-ifc:before {
        content: "\f028";
    }
    .cf-incnt:before {
        content: "\f029";
    }
    .cf-ioc:before {
        content: "\f02a";
    }
    .cf-kmd:before {
        content: "\f02b";
    }
    .cf-kobo:before {
        content: "\f02c";
    }
    .cf-kore:before {
        content: "\f02d";
    }
    .cf-lbc:before {
        content: "\f02e";
    }
    .cf-ldoge:before {
        content: "\f02f";
    }
    .cf-lsk:before {
        content: "\f030";
    }
    .cf-ltc:before {
        content: "\f031";
    }
    .cf-maid:before {
        content: "\f032";
    }
    .cf-mint:before {
        content: "\f033";
    }
    .cf-mona:before {
        content: "\f034";
    }
    .cf-mue:before {
        content: "\f035";
    }
    .cf-neos:before {
        content: "\f036";
    }
    .cf-nlg:before {
        content: "\f037";
    }
    .cf-nmc:before {
        content: "\f038";
    }
    .cf-note:before {
        content: "\f039";
    }
    .cf-nuc:before {
        content: "\f03a";
    }
    .cf-nxt:before {
        content: "\f03b";
    }
    .cf-ok:before {
        content: "\f03c";
    }
    .cf-omni:before {
        content: "\f03d";
    }
    .cf-pink:before {
        content: "\f03e";
    }
    .cf-pivx:before {
        content: "\f03f";
    }
    .cf-pot:before {
        content: "\f040";
    }
    .cf-ppc:before {
        content: "\f041";
    }
    .cf-qrk:before {
        content: "\f042";
    }
    .cf-rby:before {
        content: "\f043";
    }
    .cf-rdd:before {
        content: "\f044";
    }
    .cf-rep:before {
        content: "\f045";
    }
    .cf-rise:before {
        content: "\f046";
    }
    .cf-sjcx:before {
        content: "\f047";
    }
    .cf-sls:before {
        content: "\f048";
    }
    .cf-steem:before {
        content: "\f049";
    }
    .cf-strat:before {
        content: "\f04a";
    }
    .cf-sys:before {
        content: "\f04b";
    }
    .cf-trig:before {
        content: "\f04c";
    }
    .cf-ubq:before {
        content: "\f04d";
    }
    .cf-unity:before {
        content: "\f04e";
    }
    .cf-usdt:before {
        content: "\f04f";
    }
    .cf-vrc:before {
        content: "\f050";
    }
    .cf-vtc:before {
        content: "\f051";
    }
    .cf-waves:before {
        content: "\f052";
    }
    .cf-xcp:before {
        content: "\f053";
    }
    .cf-xem:before {
        content: "\f054";
    }
    .cf-xmr:before {
        content: "\f055";
    }
    .cf-xrp:before {
        content: "\f056";
    }
    .cf-zec:before {
        content: "\f057";
    }
`;
