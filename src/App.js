import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class="container">
      <div class="card col-sm-4">
        <div class="card-header bg-success text-white">
          <h4>Cicilan Bank</h4>
        </div>
        <div class="card-body">
          Nominal
          <input type="number" id="nominal" class="form-control" />
          Bunga
          <input type="number" id="bunga" class="form-control" />
          <label for="periode">Periode</label>

          <select id="Periode" class="form-control">
            <option value="1 Bulan">1 Bulan</option>
            <option value="4 Bulan">4 Bulan</option>
            <option value="8 bulan">8 Bulan</option>
            <option value="12 Bulan">12 Bulan</option>
          </select>
          <br></br>
          <button type="button" class="btn btn-success btn-block"
          onclick="count()">
            Hitung
          </button>
          <br></br>
          <br></br>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>
    </div>

  );
}

export default App;
