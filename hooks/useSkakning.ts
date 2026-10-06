import { Accelerometer } from "expo-sensors";
import { useEffect, useRef } from "react";

export function useSkakning(onSkak: () => void) {
  const senast = useRef(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(120);

    const sub = Accelerometer.addListener(({ x, y, z }) => {
      const kraft = Math.sqrt(x * x + y * y + z * z);
      const nu = Date.now();
      // 1.8 = hur hårt. 800 ms så en skakning inte räknas 20 gånger.
      if (kraft > 1.8 && nu - senast.current > 800) {
        senast.current = nu;
        onSkak();
      }
    });

    return () => sub.remove();
  }, [onSkak]);
}