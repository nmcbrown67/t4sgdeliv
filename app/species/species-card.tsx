"use client";
/*
Note: "use client" is a Next.js App Router directive that tells React to render the component as
a client component rather than a server component. This establishes the server-client boundary,
providing access to client-side functionality such as hooks and event handlers to this component and
any of its imported children. Although the SpeciesCard component itself does not use any client-side
functionality, it is beneficial to move it to the client because it is rendered in a list with a unique
key prop in species/page.tsx. When multiple component instances are rendered from a list, React uses the unique key prop
on the client-side to correctly match component state and props should the order of the list ever change.
React server components don't track state between rerenders, so leaving the uniquely identified components (e.g. SpeciesCard)
can cause errors with matching props and state in child components if the list order changes.
*/
import { Button } from "@/components/ui/button";
import type { Database } from "@/lib/schema";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import DetailedView from "./Detailed.View";
import EditSpeciesDialog from "./EditSpeciesDialog";

type Species = Database["public"]["Tables"]["species"]["Row"];

// interface SpeciesCardProps {
//   species: Species;
// }

export default function SpeciesCard({ species }: { species: Species }) {
  const [showDetailedView, setShowDetailedView] = useState<boolean>(false);
  const [showEditDialog, setShowEditDialog] = useState<boolean>(false);

  const openDetailedView = () => setShowDetailedView(true);
  const closeDetailedView = () => setShowDetailedView(false);

  const openEditDialog = () => setShowEditDialog(true);
  const closeEditDialog = () => setShowEditDialog(false);

  return (
    <>
      <div className="m-4 w-72 min-w-72 flex-none rounded border-2 p-3 shadow">
        <div className="mb-2">
          {" "}
          <Button
            className="w-full border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50"
            onClick={openEditDialog}
          >
            Edit Species
          </Button>
        </div>

        {species.image && (
          <div className="relative h-40 w-full">
            <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
          </div>
        )}
        <h3 className="mt-3 text-2xl font-semibold">{species.scientific_name}</h3>
        <h4 className="text-lg font-light italic">{species.common_name}</h4>
        <p>{species.description ? species.description.slice(0, 150).trim() + "..." : ""}</p>

        <Button className="mt-3 w-full" onClick={openDetailedView}>
          Learn More
        </Button>

        {showDetailedView && <DetailedView species={species} onClose={closeDetailedView} />}
        {showEditDialog && <EditSpeciesDialog species={species} onClose={closeEditDialog} />}
      </div>
    </>
  );
}

SpeciesCard.propTypes = {
  species: PropTypes.object.isRequired,
};
