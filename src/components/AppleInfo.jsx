import React from 'react';
import { useParams } from 'react-router-dom';

// Predefined apple database
const appleDatabase = {
  '12345': { id: '12345', variety: 'Royal Delicious', origin: 'Shimla, Himachal Pradesh', harvestDate: '2024-09-10' },
  '54321': { id: '54321', variety: 'Golden Delicious', origin: 'Kullu, Himachal Pradesh', harvestDate: '2024-09-12' },
  '67890': { id: '67890', variety: 'Red Chief', origin: 'Manali, Himachal Pradesh', harvestDate: '2024-09-15' },
  '13579': { id: '13579', variety: 'Granny Smith', origin: 'Rohru, Himachal Pradesh', harvestDate: '2024-09-18' },
  '24680': { id: '24680', variety: 'Maharaji', origin: 'Kotkhai, Himachal Pradesh', harvestDate: '2024-09-20' },
  '11111': { id: '11111', variety: 'Chaubattia Anupam', origin: 'Rampur, Himachal Pradesh', harvestDate: '2024-09-22' },
  '22222': { id: '22222', variety: 'Tydeman’s Early', origin: 'Chamba, Himachal Pradesh', harvestDate: '2024-09-24' },
  '33333': { id: '33333', variety: 'Golden Spur', origin: 'Solan, Himachal Pradesh', harvestDate: '2024-09-26' },
  '44444': { id: '44444', variety: 'Oregon Spur', origin: 'Shimla, Himachal Pradesh', harvestDate: '2024-09-28' },
  '55555': { id: '55555', variety: 'Red Gold', origin: 'Narkanda, Himachal Pradesh', harvestDate: '2024-09-30' }
};

const AppleInfo = () => {
  const { id } = useParams(); // Get the apple ID from the URL
  const apple = appleDatabase[id]; // Fetch the apple data from the static database using the ID

  if (!apple) {
    return <div className="text-center p-4">Apple not found!</div>; // Handle invalid IDs
  }

  return (
    <div className="max-w-md mx-auto p-4 shadow-md rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Apple Information</h1>
      <div className="mb-4">
        <p><strong>ID:</strong> {apple.id}</p>
        <p><strong>Variety:</strong> {apple.variety}</p>
        <p><strong>Origin:</strong> {apple.origin}</p>
        <p><strong>Harvest Date:</strong> {apple.harvestDate}</p>
      </div>
      <div className="text-sm text-gray-500">
        <p>This apple was harvested in one of the finest apple orchards in Himachal Pradesh.</p>
      </div>
    </div>
  );
};

export default AppleInfo;
