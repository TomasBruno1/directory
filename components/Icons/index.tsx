import { Circle, Path, Rect, Svg } from 'react-native-svg';

import { colors } from '~/common/styleguide';

export type IconProps = {
  fill?: string;
  width?: number;
  height?: number;
};

export function Search({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 19} height={height ?? 19} viewBox="0 0 19 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.572.3A7.19 7.19 0 00.38 7.49a7.19 7.19 0 007.192 7.188 7.163 7.163 0 004.26-1.396l5.092 5.02 1.456-1.475-5.071-5A7.19 7.19 0 007.573.3zM2.452 7.49a5.118 5.118 0 015.12-5.117c2.828 0 5.12 2.29 5.12 5.117a5.118 5.118 0 01-5.12 5.117 5.118 5.118 0 01-5.12-5.117z"
        fill={fill}
      />
    </Svg>
  );
}

export function Star({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 20} height={height ?? 19} viewBox="0 0 20 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.764.081l2.723 6.323 6.856.636-5.173 4.544 1.514 6.716-5.92-3.515-5.92 3.515 1.514-6.716L.186 7.04l6.855-.636L9.764.081zm0 5.057L8.408 8.286l-3.413.317 2.575 2.262-.753 3.345 2.947-1.75 2.948 1.75-.754-3.345 2.576-2.262-3.414-.317-1.356-3.148z"
        fill={fill}
      />
    </Svg>
  );
}

export function Web({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 18} height={height ?? 19} viewBox="0 0 18 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.059 16.473a6.744 6.744 0 100-13.487 6.744 6.744 0 000 13.487zm0 2a8.744 8.744 0 100-17.487 8.744 8.744 0 000 17.487z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.607 15.54c.576-1.437.954-3.49.954-5.81 0-2.32-.378-4.374-.954-5.811-.289-.721-.608-1.238-.91-1.558-.302-.318-.517-.375-.638-.375-.12 0-.336.057-.637.375-.303.32-.622.837-.911 1.558-.576 1.437-.954 3.49-.954 5.81 0 2.32.378 4.374.954 5.811.289.722.608 1.238.91 1.558.302.318.517.375.638.375.12 0 .336-.057.637-.375.303-.32.622-.836.911-1.558zM9.06 18.473c1.934 0 3.502-3.914 3.502-8.743 0-4.83-1.568-8.744-3.502-8.744-1.934 0-3.502 3.915-3.502 8.744s1.568 8.743 3.502 8.743z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.794 6.877H16.21v1H1.794v-1zM1.794 11.877H16.21v1H1.794v-1z"
        fill={fill}
      />
    </Svg>
  );
}

export function Arrow({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 9} height={height ?? 16} viewBox="0 0 9 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.146 7.942L.22 2.015 1.634.601l7.34 7.34-7.318 7.32L.24 13.845l5.905-5.904z"
        fill={fill}
      />
    </Svg>
  );
}

export function Badge({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 20} height={height ?? 26} viewBox="0 0 20 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.718 17.23a9.54 9.54 0 10-11.503-.094v8.497l5.837-2.855 5.666 2.87V17.23zm1.851-7.659a7.54 7.54 0 11-15.08 0 7.54 7.54 0 0115.08 0zm-3.85 8.801a9.511 9.511 0 01-3.69.74 9.51 9.51 0 01-3.813-.793v4.11l3.852-1.885 3.65 1.85v-4.022z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.997 4.47c.19.109.342.328.42.694.08.366.077.846-.015 1.417-.035.219-.084.45-.144.688a13.636 13.636 0 00-1.734-.267 13.455 13.455 0 00-1.1-1.357 7.99 7.99 0 01.528-.468c.451-.365.87-.607 1.228-.722.359-.115.626-.094.817.015zM9.634 5.645a7.982 7.982 0 00-.528-.468c-.452-.365-.87-.607-1.229-.722-.358-.115-.625-.094-.816.015-.19.109-.342.328-.42.694-.08.366-.078.846.015 1.417.035.219.083.45.144.688.535-.12 1.118-.21 1.734-.267.357-.502.728-.957 1.1-1.357zm4.018 2.302a13.39 13.39 0 01-.634 1.624c.26.558.471 1.105.634 1.624.239-.067.464-.14.673-.22.544-.205.964-.444 1.244-.695.28-.25.395-.49.395-.709 0-.218-.115-.458-.395-.709-.28-.25-.7-.489-1.244-.695a8.048 8.048 0 00-.673-.22zm-3.229 5.55c.372-.4.743-.855 1.1-1.356.617-.057 1.2-.147 1.735-.268.06.24.109.47.144.689.092.57.094 1.051.016 1.417-.08.365-.23.585-.421.694-.19.11-.458.13-.817.015-.358-.116-.777-.358-1.228-.722a7.983 7.983 0 01-.529-.469zm-1.889-1.356c.357.501.728.957 1.1 1.356a7.945 7.945 0 01-.528.469c-.452.364-.87.607-1.229.722-.358.115-.625.094-.816-.015-.19-.11-.342-.329-.42-.694-.08-.366-.078-.847.015-1.417.035-.22.083-.45.144-.689.535.12 1.118.211 1.734.268zM7.04 9.571c-.259.558-.47 1.105-.633 1.624a8.032 8.032 0 01-.673-.22c-.544-.205-.965-.444-1.244-.695-.28-.25-.396-.49-.396-.709 0-.218.116-.458.396-.709.28-.25.7-.489 1.244-.695.209-.079.434-.152.673-.22.162.52.374 1.066.633 1.624zm4.149 0c0 .636-.52 1.15-1.16 1.15-.64 0-1.158-.514-1.158-1.15 0-.635.519-1.15 1.159-1.15s1.159.515 1.159 1.15z"
        fill={fill}
      />
    </Svg>
  );
}

export function Calendar({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 16} height={height ?? 18} viewBox="0 0 16 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.238.79a1 1 0 011 1v.164h3.874V1.79a1 1 0 112 0v.163h3.802v15.77H.144V1.954h4.094V1.79a1 1 0 011-1zm4.874 3.164v.023a1 1 0 102 0v-.023h1.802v3.101H2.144V3.954h2.094v.023a1 1 0 102 0v-.023h3.874zM2.144 8.626v7.098h11.77V8.612l-11.77.014z"
        fill={fill}
      />
    </Svg>
  );
}

export function Check({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 19} height={height ?? 13} viewBox="0 0 19 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.439 1.443L6.962 12.92.827 6.785 2.24 5.37l4.72 4.72L17.026.03l1.414 1.414z"
        fill={fill}
      />
    </Svg>
  );
}

export function Download({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 13} height={height ?? 16} viewBox="0 0 13 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.44 7.518h3.304V1.01a.817.817 0 011.635 0v6.51h3.266l-4.08 5.752-4.124-5.753zM12.45 15.77H.635v-1.635H12.45v1.635z"
        fill={fill}
      />
    </Svg>
  );
}

export function Filter({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 21} height={height ?? 18} viewBox="0 0 21 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.66.087H.227L7.77 9.029v5.414l5.953 3.472v-9.1L20.66.087zM9.77 13.294l1.953 1.14V8.116l4.792-6.03H4.531l5.24 6.211v4.996z"
        fill={fill}
      />
    </Svg>
  );
}

export function Issue({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 19} height={height ?? 19} viewBox="0 0 19 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49 10.999V5.005h2v5.994h-2zM9.49 14.061a1.041 1.041 0 100-2.082 1.041 1.041 0 000 2.082z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.49 16.277a6.744 6.744 0 100-13.487 6.744 6.744 0 000 13.487zm0 2A8.744 8.744 0 109.49.79a8.744 8.744 0 000 17.487z"
        fill={fill}
      />
    </Svg>
  );
}

export function Eye({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 22} height={height ?? 22} viewBox="0 0 24 24" fill="none">
      <Path
        fill={fill}
        d="M11.9,7.1c4.6,0,7.8,2.9,9.2,4.5c-1.4,1.8-4.6,5.2-9.2,5.2c-4.3,0-7.7-3.4-9.2-5.3C4.1,10,7.3,7.1,11.9,7.1z M12,5 C4.4,5,0,11.6,0,11.6S4.8,19,12,19c7.7,0,12-7.4,12-7.4S19.7,5,12,5z M11.9,8.5c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5 c1.9,0,3.5-1.6,3.5-3.5S13.8,8.5,11.9,8.5z M11.9,12c-0.5,0.5-1.3,0.5-1.8,0c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0 C12.4,10.7,12.4,11.5,11.9,12z"
      />
    </Svg>
  );
}

export function Logo({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 25} height={height ?? 22} viewBox="0 0 25 22" fill="none">
      <Path
        d="M12.029 13.03a2.334 2.334 0 002.343-2.325 2.334 2.334 0 00-2.343-2.326 2.334 2.334 0 00-2.343 2.325 2.334 2.334 0 002.343 2.326zM18.88 1.794c-.16-.74-.466-1.183-.851-1.404-.385-.22-.926-.262-1.65-.03-.725.234-1.571.723-2.485 1.46-.35.283-.708.6-1.068.947a27.206 27.206 0 012.225 2.743c1.246.114 2.424.298 3.505.54.123-.483.221-.948.293-1.391.186-1.154.19-2.125.03-2.865zM10.163 1.82c.351.283.708.6 1.068.947A27.215 27.215 0 009.007 5.51a27.564 27.564 0 00-3.506.54c-.123-.483-.22-.948-.292-1.391-.186-1.153-.19-2.125-.031-2.865.16-.74.466-1.183.85-1.403C6.415.17 6.955.128 7.68.36s1.57.722 2.484 1.459zM19.354 7.421a27.05 27.05 0 01-1.281 3.284 27.04 27.04 0 011.28 3.283c.484-.136.939-.284 1.361-.444 1.1-.417 1.95-.9 2.515-1.406.566-.507.8-.992.8-1.433 0-.442-.234-.927-.8-1.434-.565-.506-1.415-.988-2.515-1.405-.422-.16-.877-.309-1.36-.445zM15.05 15.9a27.207 27.207 0 01-2.224 2.742c.36.348.718.664 1.069.947.913.737 1.759 1.227 2.483 1.46.725.232 1.266.19 1.65-.03.386-.221.693-.665.852-1.404.16-.74.155-1.711-.031-2.864-.072-.444-.17-.909-.293-1.392a27.56 27.56 0 01-3.505.54zM9.007 15.9a27.21 27.21 0 002.224 2.742c-.36.348-.717.664-1.068.947-.913.737-1.759 1.227-2.484 1.46-.725.232-1.265.19-1.65-.03-.385-.221-.692-.665-.851-1.404-.16-.74-.155-1.711.031-2.864.071-.444.17-.909.292-1.392a27.56 27.56 0 003.506.54zM4.704 13.988c.329-1.05.758-2.155 1.28-3.283a27.043 27.043 0 01-1.28-3.284c-.483.136-.938.285-1.36.445-1.1.417-1.95.899-2.516 1.405-.565.507-.8.992-.8 1.434 0 .441.235.926.8 1.433.566.507 1.416.989 2.515 1.405.423.16.877.31 1.36.445z"
        fill={fill}
      />
    </Svg>
  );
}

export function GitHub({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fill={fill}
        d="M12 1.60205C5.9225 1.60205 1 6.41965 1 12.3676C1 17.1314 4.14875 21.155 8.52125 22.5815C9.07125 22.6757 9.2775 22.3527 9.2775 22.0701C9.2775 21.8144 9.26375 20.9666 9.26375 20.065C6.5 20.5629 5.785 19.4056 5.565 18.8001C5.44125 18.4906 4.905 17.5351 4.4375 17.2794C4.0525 17.0776 3.5025 16.5797 4.42375 16.5662C5.29 16.5528 5.90875 17.3467 6.115 17.6697C7.105 19.298 8.68625 18.8404 9.31875 18.5578C9.415 17.8581 9.70375 17.3871 10.02 17.1179C7.5725 16.8488 5.015 15.9203 5.015 11.8024C5.015 10.6317 5.44125 9.66278 6.1425 8.90919C6.0325 8.64005 5.6475 7.53658 6.2525 6.05631C6.2525 6.05631 7.17375 5.77372 9.2775 7.15978C10.1575 6.91756 11.0925 6.79645 12.0275 6.79645C12.9625 6.79645 13.8975 6.91756 14.7775 7.15978C16.8813 5.76026 17.8025 6.05631 17.8025 6.05631C18.4075 7.53658 18.0225 8.64005 17.9125 8.90919C18.6138 9.66278 19.04 10.6182 19.04 11.8024C19.04 15.9337 16.4688 16.8488 14.0213 17.1179C14.42 17.4544 14.7638 18.1003 14.7638 19.1096C14.7638 20.5495 14.75 21.7068 14.75 22.0701C14.75 22.3527 14.9563 22.6891 15.5063 22.5815C17.69 21.86 19.5875 20.4865 20.9318 18.6542C22.2761 16.822 22.9994 14.6233 23 12.3676C23 6.41965 18.0775 1.60205 12 1.60205Z"
      />
    </Svg>
  );
}

export function Plus({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 16} height={height ?? 16} viewBox="0 0 16 16" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M.114 7.12H15.57v2H.114v-2z" fill={fill} />
      <Path fillRule="evenodd" clipRule="evenodd" d="M6.842 15.848V.393h2v15.455h-2z" fill={fill} />
    </Svg>
  );
}

export function XIcon({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg
      width={width ?? 16}
      height={height ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: 'rotate(45deg)' }}>
      <Path fillRule="evenodd" clipRule="evenodd" d="M.114 7.12H15.57v2H.114v-2z" fill={fill} />
      <Path fillRule="evenodd" clipRule="evenodd" d="M6.842 15.848V.393h2v15.455h-2z" fill={fill} />
    </Svg>
  );
}

export function Question({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 16} height={height ?? 16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.88849 16.0515H13.0629V15.8036C13.082 13.7826 13.7398 12.858 15.2936 11.9047C17.0477 10.8561 18.144 9.42612 18.144 7.24309C18.144 4.02097 15.6368 2 11.9953 2C8.65875 2 5.95141 3.84938 5.85608 7.47188H9.24979C9.33558 5.67969 10.6321 4.82173 11.9762 4.82173C13.4347 4.82173 14.6073 5.79409 14.6073 7.29075C14.6073 8.62536 13.7207 9.54051 12.5672 10.265C10.8799 11.3136 9.90756 12.3718 9.88849 15.8036V16.0515ZM11.5567 22C12.6816 22 13.6444 21.0658 13.654 19.9028C13.6444 18.7588 12.6816 17.8246 11.5567 17.8246C10.3937 17.8246 9.44998 18.7588 9.45951 19.9028C9.44998 21.0658 10.3937 22 11.5567 22Z"
        fill={fill}
      />
    </Svg>
  );
}

export function Sort({ width, height, fill = colors.black }: IconProps) {
  return (
    <Svg width={width ?? 16} height={height ?? 16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3,5H0V3h10.3V5z M8.9,9L0,9l0-2l8.9,0L8.9,9L8.9,9z M7.5,13H0v-2h7.5V13L7.5,13z M10.3,8.6h2.3v-5c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6v5H16L13.2,13L10.3,8.6L10.3,8.6z"
        fill={fill}
      />
    </Svg>
  );
}

export function Thumbnail({ width = 16, height = 16, fill = colors.gray3 }: IconProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M14 2H2v12h12V2zM0 0v16h16V0H0z" fill={fill} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7.586l3 3 2-2 3.707 3.707-1.414 1.414L12 11.414l-.586.586 2.293 2.293-1.414 1.414L7 10.414l-5.293 5.293-1.414-1.414L7 7.586z"
        fill={fill}
      />
      <Path d="M12 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={fill} />
    </Svg>
  );
}

export function License({ width = 16, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 18" fill="none">
      <Path
        fill={fill}
        d="M0,0v18h16V0H0z M14,15.9H2V3.1h12C14,3.1,14,15.9,14,15.9z M12,13H4v-1h8V13z M12,10.5H4v-1h8V10.5z M12,8H4V7h8V8z"
      />
    </Svg>
  );
}

export function Fork({ width = 15, height = 16, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <Path
        fill={fill}
        d="M8.5,10.8V8l4.7-5l0,2.3H15V0H9.7v1.8H12L7.5,6.5L3,1.8h2.3V0H0v5.3h1.8V3l4.7,5v2.9"
      />
      <Path
        fill={fill}
        d="M10.7,12.8c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2S10.7,11.1,10.7,12.8z M7.5,11.4c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4S8.3,11.4,7.5,11.4z"
      />
    </Svg>
  );
}

export function Code({ width = 16, height = 16, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path fill={fill} d="M0,8l5-3.2v2L2.8,8L5,9.3v2L0,8z" />
      <Path fill={fill} d="M13.2,8L11,6.7v-2L16,8l-5,3.3v-2L13.2,8z" />
      <Path fill={fill} d="M7.3,13.8H5.8l3-11.5h1.5L7.3,13.8z" />
    </Svg>
  );
}

export function Warning({ width = 17, height = 17, fill = colors.warningDark }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <Path
        d="M12.147 22.345c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zM12.147 8.345v4M12.147 16.345h.01"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TypeScript({ width = 16, height = 16, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fill={fill}
        d="M0,0v8v8h16V0H0z M9.1,8.7H7v5.9H5.6V8.7H3.5V7.4h5.6V8.7z M14.5,13.4c-0.3,0.7-0.9,1.1-1.8,1.3c-0.3,0-0.9,0-1.2,0c-0.6-0.1-1.3-0.4-1.6-0.9c-0.1-0.2-0.4-0.6-0.4-0.6l0.2-0.1l0.6-0.3l0.5-0.3l0.1,0.1c0.1,0.2,0.4,0.5,0.6,0.6c0.5,0.3,1.2,0.2,1.6-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2,0-0.3-0.1-0.4c-0.1-0.2-0.4-0.3-1.1-0.6c-0.8-0.4-1.2-0.6-1.5-0.9c-0.2-0.2-0.4-0.5-0.4-0.8c-0.1-0.2-0.1-0.8,0-1c0.2-0.8,0.8-1.4,1.6-1.5c0.3-0.1,0.9,0,1.2,0l0,0c0.4,0.1,0.7,0.3,1,0.6c0.1,0.2,0.4,0.4,0.4,0.5c0,0-0.7,0.5-1.1,0.8c0,0-0.1-0.2-0.1-0.2c-0.2-0.3-0.4-0.4-0.8-0.4c-0.5,0-0.8,0.2-0.8,0.6c0,0.1,0,0.2,0.1,0.3c0.1,0.2,0.3,0.4,0.9,0.6c1.1,0.5,1.6,0.8,1.9,1.3C14.7,12,14.8,12.8,14.5,13.4z"
      />
    </Svg>
  );
}

export function PlatformTvOS({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path d="M3 5h18v12H3z" opacity=".3" fill={fill} />
      <Path
        fill={fill}
        d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
      />
    </Svg>
  );
}

export function PlatformMacOS({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path opacity="0.3" d="M4 6H28V24.439H20.5V27H11.5V24.439H4V6Z" fill={fill} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 23.5C30 24.9667 28.9667 26 27.5 26H32C32 27.1733 31.4667 28 30 28H2C0.533333 28 0 27.1733 0 26H4.5C3.03333 26 2 24.9667 2 23.5V7.5C2 6.03333 3.5 5 4.5 5H27.5C28.5 5 30 6.03333 30 7.5V23.5ZM12 26L13 27H19L20 26H12ZM5.33333 7C4.68141 7.01656 3.97921 7.7128 4 8.5V22.5C3.99334 23.2469 4.65987 23.9831 5.33333 24H26.6667C27.3754 23.9965 28.0046 23.2237 28 22.5V8.5C28.0197 7.72884 27.3523 6.99362 26.6667 7H18.5V8L18 8.5H14L13.5 8L13.5 7H5.33333Z"
        fill={fill}
      />
    </Svg>
  );
}

export function PlatformIOS({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M22.5 0H9.5C7.5 0 6 1.5 6 3.5V28.5C6 30.5 7.5 32 9.5 32H22.5C24.5 32 26 30.5 26 28.5V3.5C26 1.5 24.5 0 22.5 0ZM24 28.5C24.0026 29.1545 23.2965 29.9913 22.5 30H9.5C8.72277 30.0108 8.00356 29.1706 8 28.5V3.5C8.00219 2.64538 8.78312 2.00046 9.5 2H22.5C23.2749 1.99957 24.0009 2.69315 24 3.5V28.5Z"
        fill={fill}
      />
      <Rect x="13" y="3" width="6" height="2" rx="1" fill={fill} />
      <Path opacity="0.3" d="M8 2H24V30H8V2Z" fill={fill} />
    </Svg>
  );
}

export function PlatformAndroid({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill={fill}
        d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"
      />
    </Svg>
  );
}

export function PlatformWeb({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path opacity="0.3" d="M27 10H5V25H27V10Z" fill={fill} />
      <Path
        fill={fill}
        d="M27.2 5H4.8C3.26 5 2.014 6.29375 2.014 7.875L2 25.125C2 26.7063 3.26 28 4.8 28H27.2C28.74 28 30 26.7063 30 25.125V7.875C30 6.29375 28.74 5 27.2 5ZM20 25H5V19H20V25ZM20 17H5V10H20V17ZM27 25H22V10H27V25Z"
      />
    </Svg>
  );
}

export function PlatformWindows({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        fill={fill}
        d="M0,4.5l13.1-1.8l0,12.6L0,15.5L0,4.5z M13.1,16.8l0,12.6L0,27.7l0-10.9L13.1,16.8z M14.7,2.5L32,0v15.2l-17.3,0.1L14.7,2.5z M32,17l0,15.1l-17.3-2.4l0-12.7L32,17z"
      />
    </Svg>
  );
}

export function PlatformExpo({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 22" fill="none">
      <Path
        fill={fill}
        d="M11.39 8.269c.19-.277.397-.312.565-.312.168 0 .447.035.637.312 1.49 2.03 3.95 6.075 5.765 9.06 1.184 1.945 2.093 3.44 2.28 3.63.7.714 1.66.269 2.218-.541.549-.797.701-1.357.701-1.954 0-.407-7.958-15.087-8.759-16.309C14.027.98 13.775.683 12.457.683h-.988c-1.315 0-1.505.297-2.276 1.472C8.392 3.377.433 18.057.433 18.463c0 .598.153 1.158.703 1.955.558.81 1.518 1.255 2.218.54.186-.19 1.095-1.684 2.279-3.63 1.815-2.984 4.267-7.029 5.758-9.06z"
      />
    </Svg>
  );
}

export function PlatformVisionOS({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 392 222" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M360.71 49.8576C362.706 52.7425 363.922 54.5 365.5 54.5C398 54.5001 396.5 113 382 136C379.833 161.667 359.851 217.719 296 221.5C258.761 223.705 235.907 205.678 218.926 192.284C209.231 184.637 201.45 178.5 194 178.5C186.773 178.5 178.966 184.671 169.233 192.365C152.168 205.855 129.182 224.024 93.0227 221.815C31.0458 218.029 11.6496 161.897 9.54646 136.194C-4.52801 113.161 -5.98401 54.5776 25.5622 54.5776C27.0938 54.5776 28.2742 52.8175 30.2118 49.9285C38.7116 37.2549 61.7829 2.85439 193 0C328.184 2.85033 351.953 37.2019 360.71 49.8576ZM196 26.0001L197.201 26C254.529 25.9966 347.957 25.991 356.505 96.1585C365.274 168.142 333.328 182.604 316.309 190.308C315.494 190.677 314.714 191.03 313.974 191.373C297.771 198.89 259.797 196.886 224.354 164.312C219.966 160.637 208.152 153.288 196 153.288C183.848 153.288 172.034 160.637 167.646 164.312C132.203 196.886 94.2287 198.89 78.0262 191.373C77.2861 191.03 76.5057 190.677 75.691 190.308C58.6722 182.604 26.7261 168.142 35.4949 96.1585C44.0425 25.991 137.471 25.9966 194.799 26L196 26.0001Z"
        fill={fill}
      />
      <Path
        d="M197.201 26L196 26.0001L194.799 26C137.471 25.9966 44.0425 25.991 35.4949 96.1585C26.3064 171.588 61.8238 183.856 78.0262 191.373C94.2287 198.89 132.203 196.886 167.646 164.312C172.034 160.637 183.848 153.288 196 153.288C208.152 153.288 219.966 160.637 224.354 164.312C259.797 196.886 297.771 198.89 313.974 191.373C330.176 183.856 365.694 171.588 356.505 96.1585C347.957 25.991 254.529 25.9966 197.201 26Z"
        fill={fill}
        fillOpacity="0.25"
      />
    </Svg>
  );
}

export function ReactLogo({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill="none">
      <Path
        fill={fill}
        d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
      />
    </Svg>
  );
}

export function Info({ width = 18, height = 18, fill = colors.black }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.51 8.00101V13.995H8.50999V8.00101H10.51ZM9.50999 4.939C9.2339 4.939 8.96912 5.04868 8.7739 5.24391C8.57867 5.43913 8.46899 5.70391 8.46899 5.98C8.46899 6.25609 8.57867 6.52088 8.7739 6.7161C8.96912 6.91133 9.2339 7.021 9.50999 7.021C9.78608 7.021 10.0509 6.91133 10.2461 6.7161C10.4413 6.52088 10.551 6.25609 10.551 5.98C10.551 5.70391 10.4413 5.43913 10.2461 5.24391C10.0509 5.04868 9.78608 4.939 9.50999 4.939Z"
        fill={fill}
      />
      <Circle cx="9.5" cy="9.5" r="8" stroke={fill} opacity={0.5} />
    </Svg>
  );
}
