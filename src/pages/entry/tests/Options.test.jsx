import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays image for each scoop from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping from server", async () => {
  render(<Options optionType="toppings" />);

  //find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /toppings/i,
  });
  expect(toppingImages).toHaveLength(3);

  //confirm alt text images
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherrie's toppings",
    "M&M's toppings",
    "Hot fudge toppings",
  ]);
});
