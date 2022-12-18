import * as React from "react";
import * as Font from "expo-font";

function useLoadedAssets() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  async function loadAssets() {
    try {
      await Font.loadAsync({
        "Inter-Regular": require("../assets/fonts/BasierCircle-Regular.ttf"),
        "Inter-Medium": require("../assets/fonts/BasierCircle-Medium.ttf"),
        "Inter-Bold": require("../assets/fonts/BasierCircle-SemiBold.ttf"),
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
