import * as React from "react";
import * as Font from "expo-font";

function useLoadedAssets() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  async function loadAssets() {
    try {
      await Font.loadAsync({
        "Inter-Regular": require("../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
        "Inter-Medium": require("../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
        "Inter-Bold": require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  }

  React.useEffect(() => {
    loadAssets();
  }, []);

  return isLoaded;
}

export default useLoadedAssets;
