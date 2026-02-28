import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'RemoveBG - Free AI Background Remover Online & Automatic',
    template: '%s | RemoveBG'
  },
  description: 'Remove background from images automatically and for free with high quality. The best AI background removal tool for your design needs. Hapus background foto otomatis gratis.',
  keywords: [
    'remove background', 'bg remover', 'transparent background', 'background eraser', 'online photo editor', 'free bg removal', 'ai background remover', 'remove bg from image', 'cut out background', 'photo background remover',
    'hapus background', 'hapus latar belakang', 'edit foto online', 'background transparan', 'penghapus latar belakang otomatis', 'hapus bg gratis', 'edit gambar online', 'foto tanpa background',
    'quitar fondo', 'eliminador de fondo', 'fondo transparente', 'borrar fondo', 'editor de fotos online', 'quitar fondo a una imagen', 'remover fondo gratis',
    'supprimer l\'arrière-plan', 'effaceur de fond', 'fond transparent', 'éditeur de photos en ligne', 'enlever le fond d\'une image', 'détourage photo gratuit',
    'hintergrund entfernen', 'hintergrundlöscher', 'transparenter hintergrund', 'online-fotoeditor', 'bildhintergrund entfernen', 'foto freistellen kostenlos',
    '背景削除', '背景透過', '背景消しゴム', 'オンライン写真編集', '画像の背景を削除', '無料の背景削除ツール',
    '移除背景', '背景擦除', '透明背景', '在线照片编辑器', '删除图片背景', '免费背景移除',
    'إزالة الخلفية', 'ممحاة الخلفية', 'خلفية شفافة', 'محرر الصور عبر الإنترنت', 'حذف خلفية الصورة', 'مزيل الخلفية مجانا',
    'remover fundo', 'apagador de fundo', 'fundo transparente', 'editor de fotos online', 'remover fundo de imagem', 'tirar fundo de foto grátis',
    'удалить фон', 'удаление фона', 'прозрачный фон', 'онлайн фоторедактор', 'убрать фон с картинки', 'бесплатное удаление фона',
    'rimuovi sfondo', 'gomma per sfondo', 'sfondo trasparente', 'editor di foto online', 'rimuovere sfondo immagine', 'cancella sfondo foto gratis',
    '배경 제거', '배경 투명하게', '배경 지우개', '온라인 사진 편집기', '이미지 배경 없애기', '무료 배경 제거',
    'arka planı kaldır', 'arka plan silici', 'şeffaf arka plan', 'çevrimiçi fotoğraf editörü', 'resim arka planını temizle', 'ücretsiz arka plan kaldırma'
  ],
  authors: [{ name: 'RemoveBG Team' }],
  creator: 'RemoveBG',
  publisher: 'RemoveBG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RemoveBG - Free AI Background Remover Online',
    description: 'Remove background from images automatically and for free with high quality.',
    url: 'https://remove.bg.alikhlas.icu/',
    siteName: 'RemoveBG',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RemoveBG - Free AI Background Remover Online',
    description: 'Remove background from images automatically and for free with high quality.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-id',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
