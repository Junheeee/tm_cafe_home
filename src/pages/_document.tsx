import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext
} from 'next/document';

// interface MyDocumentProps extends DocumentProps {
//   emotionStyleTags: EmotionJSX.Element[];
// }

export default function MyDocument() {
  return (
    <Html lang='kr'>
      <Head />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
        integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
        crossOrigin='anonymous'
      />
      <body>
        <div className='container'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
