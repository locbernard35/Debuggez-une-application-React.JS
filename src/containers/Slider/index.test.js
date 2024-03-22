import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("janvier");// Test lengh -1 
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
   

  });
});
 

  describe("controle txt=>World Gaming Day", () => {

    it("screenobjet contenant->document.body", async () => {
      window.console.error = jest.fn();
      api.loadData = jest.fn().mockReturnValue(data);
      render(
        <DataProvider>
          <Slider />
        </DataProvider>
      );  
     
      //  await screen.findByText("xxxWorld Gaming Dayxxx");// Test add   =>flase
      await screen.findByText("World Gaming Day");// Test add   =>true
    });
  });


