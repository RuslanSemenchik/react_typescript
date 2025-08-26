import React, { useState } from "react";
import axios from "axios";


interface University {
name: string;
web_pages: string[];
}


const Universities: React.FC = () => {
const [universities, setUniversities] = useState<University[]>([]);
const [loaded, setLoaded] = useState(false);


const fetchUniversities = async () => {
try {
const response = await axios.get<University[]>(
"http://universities.hipolabs.com/search?country=France"
);
// Берем только первые 16
setUniversities(response.data.slice(0, 16));
setLoaded(true);
} catch (error) {
console.error("Ошибка при загрузке:", error);
}
};


return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Университеты Франции</h1>
<button
onClick={fetchUniversities}
className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
>
Загрузить университеты
</button>


{loaded && (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
{universities.map((uni, index) => (
<div
key={index}
className="p-4 border rounded-xl shadow hover:shadow-lg transition"
>
<h2 className="text-lg font-semibold mb-2">{uni.name}</h2>
<a
href={uni.web_pages[0]}
target="_blank"
rel="noopener noreferrer"
className="text-blue-600 hover:underline"
>
{uni.web_pages[0]}
</a>
</div>
))}
</div>
)}
</div>
);
};


export default Universities;