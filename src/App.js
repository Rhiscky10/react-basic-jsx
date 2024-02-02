import logo from "./logo.svg";
import "./App.css";

let name = "Kofi";
let element = <h1>Hello</h1>;

function App() {
  return (
    <div>
      <h2 style={{ color: "red", backgroundColor: "purple" }} tabIndex={7}>
        Manchester United
      </h2>
      <p>
        Manchester United have won a record 20 top-flight league titles, 12 FA
        Cups, six League Cups and a record 21 FA Community Shields. In
        international football, they have won the European Cup/UEFA Champions
        League three times, and the UEFA Europa League, the UEFA Cup Winners'
        Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club
        World Cup once each. In 1968, under the management of Matt Busby, 10
        years after eight of the club's players were killed in the Munich air
        disaster, they became the first English club to win the European Cup.
        Sir Alex Ferguson is the club's longest-serving and most successful
        manager, winning 38 trophies, including 13 league titles, five FA Cups,
        and two Champions League titles between 1986 and 2013. In the 1998–99
        season, under Ferguson, the club became the first in the history of
        English football to achieve the continental treble of the Premier
        League, FA Cup and UEFA Champions League. In winning the UEFA Europa
        League under José Mourinho in 2016–17, they became one of five clubs to
        have won the original three main UEFA club competitions (the Champions
        League, Europa League and Cup Winners' Cup).
      </p>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png"
          alt="image 1"
          style={{ width: "400px", height: "400px" }}
        />
        <img
          src="https://i.ytimg.com/vi/KgO-kWzyMw4/maxresdefault.jpg"
          alt="image 2"
          style={{ width: "900px", height: "400px" }}
        />
      </div>
    </div>
  );
}

export default App;
