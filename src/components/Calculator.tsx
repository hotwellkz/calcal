import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Activity, Weight, Ruler, Calendar } from 'lucide-react';

interface CalculatorFormData {
  age: number;
  weight: number;
  height: number;
  gender: 'male' | 'female';
  activity: string;
  goal: string;
}

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorFormData>({
    age: 25,
    weight: 70,
    height: 170,
    gender: 'male',
    activity: 'moderate',
    goal: 'maintain'
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    let bmr;
    if (formData.gender === 'male') {
      bmr = 88.362 + (13.397 * formData.weight) + (4.799 * formData.height) - (5.677 * formData.age);
    } else {
      bmr = 447.593 + (9.247 * formData.weight) + (3.098 * formData.height) - (4.330 * formData.age);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const goalMultipliers = {
      lose: 0.85,
      maintain: 1,
      gain: 1.15
    };

    const calories = bmr * activityMultipliers[formData.activity as keyof typeof activityMultipliers] * 
                    goalMultipliers[formData.goal as keyof typeof goalMultipliers];
    
    setResult(Math.round(calories));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <CalculatorIcon className="w-12 h-12 text-red-500 mr-4" />
          <h1 className="text-3xl font-bold text-white">Калькулятор калорий</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                Возраст
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Weight className="w-5 h-5 mr-2" />
                Вес (кг)
              </label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({...formData, weight: Number(e.target.value)})}
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Ruler className="w-5 h-5 mr-2" />
                Рост (см)
              </label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({...formData, height: Number(e.target.value)})}
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-gray-300 mb-2 block">Пол</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`p-3 rounded-lg ${formData.gender === 'male' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
                  onClick={() => setFormData({...formData, gender: 'male'})}
                >
                  Мужской
                </button>
                <button
                  className={`p-3 rounded-lg ${formData.gender === 'female' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
                  onClick={() => setFormData({...formData, gender: 'female'})}
                >
                  Женский
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Activity className="w-5 h-5 mr-2" />
                Уровень активности
              </label>
              <select
                value={formData.activity}
                onChange={(e) => setFormData({...formData, activity: e.target.value})}
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500"
              >
                <option value="sedentary">Сидячий образ жизни</option>
                <option value="light">Легкая активность</option>
                <option value="moderate">Умеренная активность</option>
                <option value="active">Высокая активность</option>
                <option value="veryActive">Очень высокая активность</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 mb-2 block">Цель</label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500"
              >
                <option value="lose">Похудение</option>
                <option value="maintain">Поддержание веса</option>
                <option value="gain">Набор массы</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={calculateCalories}
            className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Рассчитать
          </button>

          {result && (
            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Ваша суточная норма калорий:</h2>
              <p className="text-4xl font-bold text-red-500">{result} ккал</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;