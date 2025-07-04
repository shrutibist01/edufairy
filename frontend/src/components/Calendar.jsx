import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Calendar = () => {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    startTime: '',
    endTime: '',
    description: ''
  });
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [newSyllabus, setNewSyllabus] = useState({ subject: '', chapters: '' });
  const [syllabusList, setSyllabusList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day) => {
    if (day) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      setSelectedDate(dateStr);
      setModalOpen(true);
      setNewEvent({
        title: '',
        startTime: '',
        endTime: '',
        description: ''
      });
      setSelectedEvent(null);
      setEditingIndex(-1);
    }
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.title.trim()) {
      const eventData = {
        ...newEvent,
        id: Date.now()
      };

      if (editingIndex >= 0) {
        // Edit existing event
        const updatedEvents = [...(events[selectedDate] || [])];
        updatedEvents[editingIndex] = eventData;
        setEvents(prev => ({
          ...prev,
          [selectedDate]: updatedEvents
        }));
      } else {
        // Add new event
        setEvents(prev => ({
          ...prev,
          [selectedDate]: [...(prev[selectedDate] || []), eventData]
        }));
      }

      closeModal();
    }
  };

  const handleEditEvent = (date, index) => {
    const event = events[date][index];
    setSelectedDate(date);
    setNewEvent(event);
    setEditingIndex(index);
    setModalOpen(true);
  };

  const handleRemoveEvent = (date, index) => {
    const updated = [...events[date]];
    updated.splice(index, 1);
    setEvents(prev => ({ ...prev, [date]: updated }));
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewEvent({
      title: '',
      startTime: '',
      endTime: '',
      description: ''
    });
    setSelectedEvent(null);
    setEditingIndex(-1);
  };

  const handleAddSyllabus = () => {
    if (newSyllabus.subject.trim() && newSyllabus.chapters.trim()) {
      const chapters = newSyllabus.chapters.split(',').map((chapter, index) => ({
        id: Date.now() + index, // Add unique ID for each chapter
        name: chapter.trim(),
        completed: false
      })).filter(chapter => chapter.name); // Remove empty chapters

      setSyllabusList(prev => [...prev, {
        id: Date.now(),
        subject: newSyllabus.subject.trim(),
        chapters: chapters
      }]);

      setNewSyllabus({ subject: '', chapters: '' });
      setSyllabusModalOpen(false);
    }
  };

  const toggleChapter = (syllabusIndex, chapterIndex) => {
  setSyllabusList(prev => {
    return prev.map((syllabus, si) => {
      if (si !== syllabusIndex) return syllabus;

      const updatedChapters = syllabus.chapters.map((ch, ci) => {
        if (ci !== chapterIndex) return ch;
        return { ...ch, completed: !ch.completed };
      });

      return { ...syllabus, chapters: updatedChapters };
    });
  });
};

  const removeSyllabus = (index) => {
    setSyllabusList(prev => prev.filter((_, i) => i !== index));
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const getCalendarGrid = () => {
    const totalCells = Math.ceil((daysInMonth + firstDay) / 7) * 7;
    return Array.from({ length: totalCells }, (_, index) => {
      if (index < firstDay) return null;
      const day = index - firstDay + 1;
      return day <= daysInMonth ? day : null;
    });
  };

  const getDayEvents = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events[dateStr] || [];
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="calendar-page">
        {/* Month/Year Navigation */}
        <div className="calendar-navigation">
          <button onClick={() => navigateMonth('prev')} className="nav-button">
            &#8249;
          </button>
          <div className="month-year-selector">
            <select 
              value={currentMonth} 
              onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
              className="month-select"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
            <select 
              value={currentYear} 
              onChange={(e) => setCurrentYear(parseInt(e.target.value))}
              className="year-select"
            >
              {Array.from({ length: 21 }, (_, i) => currentYear - 10 + i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button onClick={() => navigateMonth('next')} className="nav-button">
            &#8250;
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="calendar-header">
          <div className="day-header">Sun</div>
          <div className="day-header">Mon</div>
          <div className="day-header">Tue</div>
          <div className="day-header">Wed</div>
          <div className="day-header">Thu</div>
          <div className="day-header">Fri</div>
          <div className="day-header">Sat</div>
        </div>

        <div className="calendar-container">
          {getCalendarGrid().map((day, index) => (
            <div
              key={index}
              className={`calendar-cell ${day ? 'clickable' : 'empty'}`}
              onClick={() => handleDateClick(day)}
            >
              {day && (
                <>
                  <div className="date-number">{day}</div>
                  <div className="event-list">
                    {getDayEvents(day).slice(0, 2).map((event, i) => (
                      <div 
                        key={i} 
                        className="event-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditEvent(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`, i);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                    {getDayEvents(day).length > 2 && (
                      <div className="more-events">+{getDayEvents(day).length - 2} more</div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{editingIndex >= 0 ? 'Edit Event' : 'Add Event'} - {selectedDate}</h3>
                <button onClick={closeModal} className="close-button">×</button>
              </div>
              
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="event-input"
                />
                
                <div className="time-inputs">
                  <div>
                    <label>Start Time:</label>
                    <input
                      type="time"
                      value={newEvent.startTime}
                      onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>End Time:</label>
                    <input
                      type="time"
                      value={newEvent.endTime}
                      onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                    />
                  </div>
                </div>
                
                <textarea
                  placeholder="Description (optional)"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="event-textarea"
                />
                
                <div className="modal-actions">
                  <button onClick={handleAddEvent} className="save-button">
                    {editingIndex >= 0 ? 'Update Event' : 'Add Event'}
                  </button>
                  {editingIndex >= 0 && (
                    <button 
                      onClick={() => handleRemoveEvent(selectedDate, editingIndex)} 
                      className="delete-button"
                    >
                      Delete Event
                    </button>
                  )}
                </div>

                {/* Show existing events for the selected date */}
                {selectedDate && events[selectedDate] && events[selectedDate].length > 0 && (
                  <div className="existing-events">
                    <h4>Existing Events:</h4>
                    {events[selectedDate].map((event, index) => (
                      <div key={index} className="existing-event" onClick={() => handleEditEvent(selectedDate, index)}>
                        <strong>{event.title}</strong>
                        {event.startTime && <span> ({event.startTime} - {event.endTime})</span>}
                        {event.description && <p>{event.description}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Syllabus Tracker Section */}
        <div className="syllabus-section">
          <div className="section-header">
            <h3>📚 Track Syllabus</h3>
            <button onClick={() => setSyllabusModalOpen(true)} className="add-syllabus-button">
              Add Subject
            </button>
          </div>

          {syllabusList.length === 0 ? (
            <p className="no-syllabus">No subjects added yet. Click "Add Subject" to get started!</p>
          ) : (
            <div className="syllabus-grid">
              {syllabusList.map((syllabus, syllabusIndex) => (
                <div key={syllabus.id} className="syllabus-card">
                  <div className="syllabus-header">
                    <h4>{syllabus.subject}</h4>
                    <button 
                      onClick={() => removeSyllabus(syllabusIndex)} 
                      className="remove-syllabus"
                      title="Remove Subject"
                    >
                      ×
                    </button>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${(syllabus.chapters.filter(ch => ch.completed).length / syllabus.chapters.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <p className="progress-text">
                    {syllabus.chapters.filter(ch => ch.completed).length} / {syllabus.chapters.length} chapters completed
                  </p>
                  <div className="chapters-list">
                    {syllabus.chapters.map((chapter, chapterIndex) => (
                      <div key={chapter.id || chapterIndex} className="chapter-item">
                        <label className="chapter-checkbox">
                          <input
                            type="checkbox"
                            checked={chapter.completed}
                            onChange={() => toggleChapter(syllabusIndex, chapterIndex)}
                          />
                          <span className={`chapter-name ${chapter.completed ? 'completed' : ''}`}>
                            {chapter.name}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Syllabus Modal */}
        {syllabusModalOpen && (
          <div className="modal-overlay" onClick={() => setSyllabusModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Add New Subject</h3>
                <button onClick={() => setSyllabusModalOpen(false)} className="close-button">×</button>
              </div>
              
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={newSyllabus.subject}
                  onChange={(e) => setNewSyllabus({ ...newSyllabus, subject: e.target.value })}
                  className="event-input"
                />
                
                <textarea
                  placeholder="Enter chapters separated by commas (e.g., Ch 1, Ch2)"
                  value={newSyllabus.chapters}
                  onChange={(e) => setNewSyllabus({ ...newSyllabus, chapters: e.target.value })}
                  className="event-textarea"
                  rows="4"
                />
                
                <div className="modal-actions">
                  <button onClick={handleAddSyllabus} className="save-button">
                    Add Subject
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .calendar-page {
          margin-left: 240px;
          padding: 80px 20px 20px;
        }

        .calendar-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          gap: 20px;
        }

        .nav-button {
          background: #764ba2;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button:hover {
          background: #5b3d91;
        }

        .month-year-selector {
          display: flex;
          gap: 10px;
        }

        .month-select, .year-select {
          padding: 8px 12px;
          border: 2px solid #764ba2;
          border-radius: 5px;
          font-size: 16px;
          background: white;
        }

        .calendar-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin-bottom: 10px;
        }

        .day-header {
          text-align: center;
          font-weight: bold;
          padding: 10px;
          background: #764ba2;
          color: white;
          border-radius: 5px;
        }

        .calendar-container {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin: 1rem 0;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 10px;
        }

        .calendar-cell {
          background: #f9f5ff;
          border: 1px solid #ddd;
          min-height: 100px;
          padding: 8px;
          position: relative;
          border-radius: 5px;
        }

        .calendar-cell.clickable {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .calendar-cell.clickable:hover {
          background: #f0e6ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(118, 75, 162, 0.2);
        }

        .calendar-cell.empty {
          background: transparent;
          border: none;
        }

        .date-number {
          font-weight: bold;
          margin-bottom: 5px;
          color: #764ba2;
          font-size: 16px;
        }

        .event-list {
          font-size: 0.8rem;
        }

        .event-item {
          background: #764ba2;
          color: white;
          padding: 2px 6px;
          margin: 2px 0;
          border-radius: 4px;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .event-item:hover {
          background: #5b3d91;
        }

        .more-events {
          font-size: 0.7rem;
          color: #764ba2;
          font-style: italic;
          margin-top: 2px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }

        .modal {
          background: white;
          border-radius: 15px;
          padding: 0;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          background: #764ba2;
          color: white;
          padding: 20px;
          border-radius: 15px 15px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          margin: 0;
          color: white;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-body {
          padding: 20px;
        }

        .event-input, .event-textarea {
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          box-sizing: border-box;
        }

        .event-input:focus, .event-textarea:focus {
          outline: none;
          border-color: #764ba2;
        }

        .event-textarea {
          height: 80px;
          resize: vertical;
        }

        .time-inputs {
          display: flex;
          gap: 15px;
          margin: 15px 0;
        }

        .time-inputs > div {
          flex: 1;
        }

        .time-inputs label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #764ba2;
        }

        .time-inputs input {
          width: 100%;
          padding: 8px;
          border: 2px solid #ddd;
          border-radius: 5px;
          box-sizing: border-box;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .save-button {
          background: #764ba2;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          flex: 1;
        }

        .save-button:hover {
          background: #5b3d91;
        }

        .delete-button {
          background: #e63946;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        .delete-button:hover {
          background: #d62828;
        }

        .existing-events {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #eee;
        }

        .existing-events h4 {
          color: #764ba2;
          margin-bottom: 10px;
        }

        .existing-event {
          background: #f9f5ff;
          padding: 10px;
          margin: 8px 0;
          border-radius: 8px;
          cursor: pointer;
          border: 1px solid #ddd;
        }

        .existing-event:hover {
          background: #f0e6ff;
        }

        .existing-event p {
          margin: 5px 0 0 0;
          color: #666;
          font-size: 14px;
        }

        .syllabus-section {
          margin-top: 40px;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h3 {
          color: #764ba2;
          margin: 0;
          font-size: 24px;
        }

        .add-syllabus-button {
          background: #764ba2;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .add-syllabus-button:hover {
          background: #5b3d91;
          transform: translateY(-2px);
        }

        .no-syllabus {
          text-align: center;
          color: #666;
          font-style: italic;
          padding: 40px;
          background: #f9f5ff;
          border-radius: 10px;
          border: 2px dashed #ddd;
        }

        .syllabus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
        }

        .syllabus-card {
          background: #f9f5ff;
          border: 2px solid #e0d4f7;
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .syllabus-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(118, 75, 162, 0.15);
        }

        .syllabus-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .syllabus-header h4 {
          margin: 0;
          color: #764ba2;
          font-size: 20px;
        }

        .remove-syllabus {
          background: #e63946;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .remove-syllabus:hover {
          background: #d62828;
          transform: scale(1.1);
        }

        .progress-bar {
          background: #e0d4f7;
          height: 10px;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-fill {
          background: linear-gradient(90deg, #764ba2, #667eea);
          height: 100%;
          transition: width 0.5s ease;
          border-radius: 5px;
        }

        .progress-text {
          font-size: 14px;
          color: #666;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .chapters-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .chapter-item {
          margin-bottom: 8px;
        }

        .chapter-checkbox {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.3s ease;
          user-select: none;
        }

        .chapter-checkbox:hover {
          background: rgba(118, 75, 162, 0.1);
        }

        .chapter-checkbox input[type="checkbox"] {
          margin-right: 12px;
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #764ba2;
          transform: scale(1.2);
        }

        .chapter-name {
          font-size: 16px;
          transition: all 0.3s ease;
          flex: 1;
        }

        .chapter-name.completed {
          text-decoration: line-through;
          color: #999;
          opacity: 0.7;
        }

        .syllabus-list {
          list-style: none;
          padding: 0;
        }

        .syllabus-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 8px 0;
          background: #f9f5ff;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .toggle-button {
          background: #28a745;
          color: white;
          border: none;
          padding: 5px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 12px;
        }

        .toggle-button:hover {
          background: #218838;
        }
      `}</style>
    </div>
  );
};

export default Calendar;