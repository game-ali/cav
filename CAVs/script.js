document.addEventListener('DOMContentLoaded', function () {
  function updateDataDisplay(data) {
    const dataDisplay = document.getElementById('data-display');
    dataDisplay.innerHTML = `
      <p>Speed: ${data.speed} km/h</p>
      <p>Location: ${data.location}</p>
      <p>Status: ${data.status}</p>
    `;
  }

  function updateChart(data) {
    const ctx = document.getElementById('data-chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Time 1', 'Time 2', 'Time 3'], // Example labels
        datasets: [{
          label: 'Speed',
          data: [data.speed, data.speed + 10, data.speed - 5], // Example data
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute'
            }
          }
        }
      }
    });
  }

  function updateMap(location) {
    const map = L.map('map-container').setView([12.34, 56.78], 13); // Example coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([12.34, 56.78]).addTo(map).bindPopup('Vehicle Location').openPopup(); // Example coordinates
  }

  function updateAlerts(alert) {
    const alertDisplay = document.getElementById('alert-display');
    alertDisplay.innerHTML = `<p>${alert}</p>`;
  }

  function updateSensorData(sensors) {
    const sensorData = document.getElementById('sensor-data');
    sensorData.innerHTML = `
      <p>Camera: ${sensors.camera ? 'Active' : 'Inactive'}</p>
      <p>Lidar: ${sensors.lidar ? 'Active' : 'Inactive'}</p>
      <p>Radar: ${sensors.radar ? 'Active' : 'Inactive'}</p>
    `;
  }

  function updateTrafficInfo(traffic) {
    const trafficInfo = document.getElementById('traffic-info');
    trafficInfo.innerHTML = `
      <p>Traffic Status: ${traffic.status}</p>
      <p>Congestion Level: ${traffic.congestion}</p>
    `;
  }

  function updateWeatherUpdates(weather) {
    const weatherUpdates = document.getElementById('weather-updates');
    weatherUpdates.innerHTML = `
      <p>Temperature: ${weather.temperature} °C</p>
      <p>Condition: ${weather.condition}</p>
    `;
  }

  // Handle Vehicle Data Form Submission
  document.getElementById('vehicle-data-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const speed = document.getElementById('speed').value;
    const location = document.getElementById('location').value;
    const status = document.getElementById('status').value;
    const vehicleData = { speed, location, status };
    localStorage.setItem('vehicleData', JSON.stringify(vehicleData));
    updateDataDisplay(vehicleData);
    updateChart(vehicleData);
    updateMap(location);
  });

  // Handle Sensor Data Form Submission
  document.getElementById('sensor-data-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const camera = document.getElementById('camera').value === 'active';
    const lidar = document.getElementById('lidar').value === 'active';
    const radar = document.getElementById('radar').value === 'active';
    const sensorData = { camera, lidar, radar };
    localStorage.setItem('sensorData', JSON.stringify(sensorData));
    updateSensorData(sensorData);
  });

  // Handle Traffic Info Form Submission
  document.getElementById('traffic-info-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('traffic-status').value;
    const congestion = document.getElementById('congestion').value;
    const trafficInfo = { status, congestion };
    localStorage.setItem('trafficInfo', JSON.stringify(trafficInfo));
    updateTrafficInfo(trafficInfo);
  });

  // Handle Weather Updates Form Submission
  document.getElementById('weather-updates-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const temperature = document.getElementById('temperature').value;
    const condition = document.getElementById('condition').value;
    const weatherUpdates = { temperature, condition };
    localStorage.setItem('weatherUpdates', JSON.stringify(weatherUpdates));
    updateWeatherUpdates(weatherUpdates);
  });

  // Load Data from Local Storage on Page Load
  const storedVehicleData = JSON.parse(localStorage.getItem('vehicleData'));
  if (storedVehicleData) {
    updateDataDisplay(storedVehicleData);
    updateChart(storedVehicleData);
    updateMap(storedVehicleData.location);
  }

  const storedSensorData = JSON.parse(localStorage.getItem('sensorData'));
  if (storedSensorData) {
    updateSensorData(storedSensorData);
  }

  const storedTrafficInfo = JSON.parse(localStorage.getItem('trafficInfo'));
  if (storedTrafficInfo) {
    updateTrafficInfo(storedTrafficInfo);
  }

  const storedWeatherUpdates = JSON.parse(localStorage.getItem('weatherUpdates'));
  if (storedWeatherUpdates) {
    updateWeatherUpdates(storedWeatherUpdates);
  }
  
  document.getElementById('read-more-studies').addEventListener('click', function () {
    alert('Detailed information on regional studies related to CAVs...');
  });

  document.getElementById('read-more-policies').addEventListener('click', function () {
    alert('Detailed analysis of policy impacts on CAV deployment...');
  });

  document.getElementById('read-more-books').addEventListener('click', function () {
    alert('Comprehensive guide on Connected and Automated Vehicles...');
  });
});