import ButtonLink from "@/components/ButtonLink";
import ItemList from "./item-list";
export default function Home() {
  return (
    <main className="flex flex-col p-4">
      <div className="flex gap-3">
        <ButtonLink text="composition" url="/composition" />
        <ButtonLink text="effect" url="/effect" />
        <ButtonLink text="lifting-stateup" url="/lifting-stateup" />
        <ButtonLink text="server-component" url="/server-component" />
      </div>
      <ItemList />
    </main>
  );
}
