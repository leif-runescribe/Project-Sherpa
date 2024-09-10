import React from 'react';
import QRCode from 'react-qr-code';

// Predefined apple data with consistent IDs
const appleDatabase = [
  { id: '12345', variety: 'Royal Delicious', origin: 'Shimla, Himachal Pradesh', harvestDate: '2024-09-10' },
  { id: '54321', variety: 'Golden Delicious', origin: 'Kullu, Himachal Pradesh', harvestDate: '2024-09-12' },
  { id: '67890', variety: 'Red Chief', origin: 'Manali, Himachal Pradesh', harvestDate: '2024-09-15' },
  { id: '13579', variety: 'Granny Smith', origin: 'Rohru, Himachal Pradesh', harvestDate: '2024-09-18' },
  { id: '24680', variety: 'Maharaji', origin: 'Kotkhai, Himachal Pradesh', harvestDate: '2024-09-20' },
  { id: '11111', variety: 'Chaubattia Anupam', origin: 'Rampur, Himachal Pradesh', harvestDate: '2024-09-22' },
  { id: '22222', variety: 'Tydeman’s Early', origin: 'Chamba, Himachal Pradesh', harvestDate: '2024-09-24' },
  { id: '33333', variety: 'Golden Spur', origin: 'Solan, Himachal Pradesh', harvestDate: '2024-09-26' },
  { id: '44444', variety: 'Oregon Spur', origin: 'Shimla, Himachal Pradesh', harvestDate: '2024-09-28' },
  { id: '55555', variety: 'Red Gold', origin: 'Narkanda, Himachal Pradesh', harvestDate: '2024-09-30' }
];

const AppleQRCode = ({ apple }) => {
  const url = `https://project-sherpa.vercel.app/apple/${apple.id}`; // URL for the apple details page

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-lg font-bold mb-2">QR Code for {apple.variety}</h2>
      <QRCode value={url} size={150} />
      <p className="mt-2">Scan to view details about this apple.</p>
      <p><strong>Origin:</strong> {apple.origin}</p>
      <p><strong>Harvest Date:</strong> {apple.harvestDate}</p>
    </div>
  );
};

export default function QRCodeExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {appleDatabase.map((apple) => (
        <AppleQRCode key={apple.id} apple={apple} />
      ))}
    </div>
  );
}
