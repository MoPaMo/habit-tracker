import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Award, ArrowUp, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HabitTracker = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });
  
  const [newHabit, setNewHabit] = useState('');
  const [frequency, setFrequency] = useState('daily');
  
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (e) => {
    e.preventDefault();
    if (!newHabit.trim()) return;
    
    const habit = {
      id: Date.now(),
      name: newHabit,
      frequency,
      streak: 0,
      completedDates: [],
      created: new Date().toISOString(),
    };
    
    setHabits([...habits, habit]);
    setNewHabit('');
  };

  const toggleCompletion = (habitId) => {
    const today = new Date().toISOString().split('T')[0];
    
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const isCompleted = habit.completedDates.includes(today);
        let newCompletedDates;
        let newStreak;
        
        if (isCompleted) {
          newCompletedDates = habit.completedDates.filter(date => date !== today);
          newStreak = Math.max(0, habit.streak - 1);
        } else {
          newCompletedDates = [...habit.completedDates, today];
          newStreak = habit.streak + 1;
        }
        
        return {
          ...habit,
          completedDates: newCompletedDates,
          streak: newStreak,
        };
      }
      return habit;
    }));
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  const getCompletionRate = (habit) => {
    if (habit.completedDates.length === 0) return 0;
    const days = Math.ceil((new Date() - new Date(habit.created)) / (1000 * 60 * 60 * 24));
    return Math.round((habit.completedDates.length / days) * 100);
  };

  const getChartData = () => {
    const last7Days = [...Array(7)].map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    return last7Days.map(date => ({
      date: date,
      completed: habits.reduce((acc, habit) => 
        acc + (habit.completedDates.includes(date) ? 1 : 0), 0
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Habit Tracker</h1>
          <p className="text-gray-600">Build better habits, one day at a time</p>
        </div>

        {/* Add New Habit Form */}
        <Card className="bg-white">
          <CardContent>
            <form onSubmit={addHabit} className="flex gap-4 items-end py-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Habit
                </label>
                <input
                  type="text"
                  value={newHabit}
                  onChange={(e) => setNewHabit(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter a new habit..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={20} /> Add Habit
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Habits</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{habits.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Highest Streak</CardTitle>
              <Award className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.max(...habits.map(h => h.streak), 0)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <ArrowUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {habits.length ? Math.round(habits.reduce((acc, habit) => 
                  acc + getCompletionRate(habit), 0) / habits.length) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Chart */}
        <Card>
          <CardHeader>
            <CardTitle>7-Day Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="completed" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Habits List */}
        <div className="space-y-4">
          {habits.length === 0 && (
            <Alert>
              <AlertDescription>
                No habits added yet. Start by adding a new habit above!
              </AlertDescription>
            </Alert>
          )}
          
          {habits.map(habit => (
            <Card key={habit.id} className="bg-white">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleCompletion(habit.id)}
                    className={`p-2 rounded-full transition-colors ${
                      habit.completedDates.includes(new Date().toISOString().split('T')[0])
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <CheckCircle2 size={24} />
                  </button>
                  <div>
                    <h3 className="font-semibold text-lg">{habit.name}</h3>
                    <p className="text-sm text-gray-500">
                      {habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)} •{' '}
                      {getCompletionRate(habit)}% completion rate
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{habit.streak}</p>
                    <p className="text-sm text-gray-500">day streak</p>
                  </div>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitTracker;