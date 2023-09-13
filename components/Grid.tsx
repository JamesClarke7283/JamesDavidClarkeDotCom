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
  return (
    <div class="flex justify-around">
      {grid_props.grid.map((grid) => (
        <div class="gap-x-5">
          <h2 id={grid.title.toLowerCase()} class="text-2xl">{grid.title}</h2>
          <i class={grid.icon_classes} aria-hidden="true"></i>
          <p class="mt-4">
            {grid.description}
          </p>
          <p class="mt-4">
            <a href={grid.url}>
              View details
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
