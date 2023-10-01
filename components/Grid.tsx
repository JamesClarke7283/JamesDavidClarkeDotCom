type GridItem = {
  title: string;
  icon_classes: string;
  description: string;
  url: string;
};

type GridProps = {
  grid: GridItem[];
};

export default function Grid(grid_props: GridProps) {
  const numberOfItems = grid_props.grid.length;
  const widthClass = `w-1/${numberOfItems}`;

  return (
    <div class="flex justify-around gap-x-10">
      {grid_props.grid.map((grid) => (
        <div class={`flex flex-col items-center ${widthClass}`}>
          <h2 id={grid.title.toLowerCase()} class="text-2xl mb-2">
            {grid.title}
          </h2>
          <i class={grid.icon_classes + " mb-2"} aria-hidden="true"></i>
          <p class="mt-2 mb-2 text-center">
            {grid.description}
          </p>
          <p class="mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href={grid.url}>
              View details
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
