export default {
  colors: {
    text: "hsl(210, 50%, 96%)",
    background: "hsl(230, 25%, 18%)",
    primary: "rgb(149, 128, 255)",
    secondary: "hsl(290, 100%, 80%)",
    highlight: "hsl(260, 20%, 40%)",
    purple: "hsl(290, 100%, 80%)",
    muted: "hsla(230, 20%, 0%, 20%)",
    gray: "hsl(210, 50%, 60%)",
  },
  breakpoints: ["1080px", "1080px"],
  fonts: {
    body: "Inter",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      color: "text",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  text: {
    default: {
      color: "text",
    },
    heading: {
      variant: "text.default",
      color: "text",
    },
    logo: {
      variant: "text.default",
      color: "primary",
      fontFamily: "Cinzel",
    },
    highlight: {
      variant: "text.default",
      color: "primary",
    },
  },
  buttons: {
    primary: {
      ":disabled": {
        bg: "muted",
      },
      bg: "primary",
      py: [2, 2],
      px: [3, 3],
      cursor: "pointer",
    },
    outline: {
      variant: "buttons.primary",
      cursor: "pointer",
      bg: "background",
      border: "1px solid",
      borderColor: "primary",
    },
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: 8,
      bg: "highlight",
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable":
      {
        color: "purple",
      },
    ".atrule,.attr-value,.keyword": {
      color: "primary",
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "secondary",
    },
  },
  forms: {
    label: {
      color: "text",
    },
    input: {
      color: "text",
    },
    textarea: {
      color: "text",
    },
    select: {
      color: "text",
    },
  },
};
