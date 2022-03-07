import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class="container">
      <div class="card col-sm-4">
        <div class="card-header bg-danger text-white">
          <h4>Hitung Harga Akhir</h4>
        </div>
        <div class="card-body">
          Harga Awal
          <input type="number" id="harga awal" class="form-control" />
          PPN
          <input type="number" id="ppn" class="form-control" />
          Diskon
          <input type="number" id="diskon" class="form-control" />
          
          <br></br>
          <button type="button" class="btn btn-danger btn-block"
          onclick="count()">
            Hitung
          </button>
          <br></br>
          <br></br>
          Harga Akhir
          <input type="text" id="hasil" class="form-control" readonly />
        </div>
      </div>
    </div>

  );
}

export default App;
