import { 
  AcademicCapIcon, 
  CalculatorIcon, // Akuntansi
  ArchiveBoxIcon, // Gudang
  UserGroupIcon, // Personalia
  ClockIcon, // Presensi
  ClipboardDocumentListIcon, // Inventarisasi
  CreditCardIcon, // PPOB
  ChatBubbleLeftRightIcon, // Pelayanan
  CurrencyDollarIcon, // Cek Tagihan
} from '@heroicons/react/24/solid';

export const apps = [
  {
    id: 1,
    title: 'SIMPADU',
    description: 'Sistem Informasi Manajemen Terpadu',
    url: 'http://36.95.152.234:8000',
    icon: AcademicCapIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 2,
    title: 'AKUNTANSI',
    description: 'Sistem Informasi Akuntansi & Keuangan',
    url: 'http://36.95.152.234:8000',
    icon: CalculatorIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 3,
    title: 'GUDANG',
    description: 'Manajemen Stok & Pergudangan',
    url: 'http://36.95.152.234:8000',
    icon: ArchiveBoxIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 4,
    title: 'PERSONALIA',
    description: 'Manajemen Data Karyawan & HR',
    url: 'http://36.95.152.234:8000',
    icon: UserGroupIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 5,
    title: 'PRESENSI',
    description: 'Sistem Absensi Digital',
    url: 'https://internal.pdamkotamagelang.com/absensi',
    icon: ClockIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 6,
    title: 'INVENTARISASI',
    description: 'Pencatatan Aset & Inventaris',
    url: 'https://inventaris.pdamkotamagelang.com',
    icon: ClipboardDocumentListIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 7,
    title: 'PPOB',
    description: 'Payment Point Online Bank',
    url: 'http://36.95.152.234:8011',
    icon: CreditCardIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 8,
    title: 'PELAYANAN',
    description: 'Pusat Layanan & Informasi',
    url: '../pelayanan',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-cyan-600',
  },
  {
    id: 9,
    title: 'CEK TAGIHAN',
    description: 'Informasi Tagihan & Pembayaran',
    url: 'https://internal.pdamkotamagelang.com/cekx/tagihan.php',
    icon: CurrencyDollarIcon,
    color: 'bg-cyan-600',
  }
];
