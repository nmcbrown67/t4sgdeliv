// DetailedView.tsx
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function DetailedView({ species, onClose }: { species: Species; onClose: () => void }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogClose asChild>
        <button className="cursor-pointer text-xl font-bold">×</button>
      </DialogClose>
      <DialogContent>
        <DialogTitle>
          {" "}
          <b>Scientific Name: </b> {species.scientific_name}
        </DialogTitle>
        <p>
          {" "}
          <b>Common Name:</b> {species.common_name}
        </p>
        <p>
          {" "}
          <b>Total Population:</b> {species.total_population}
        </p>
        <p>
          {" "}
          <b>Kingdom:</b> {species.kingdom}
        </p>
        <p>
          {" "}
          <b>Description:</b> {species.description}
        </p>
        {/* Add other details you want to display */}
      </DialogContent>
    </Dialog>
  );
}

//copy addspecies form to detailed view dialogue

// form to edit specides in add-species dialogue
// need form to edit species info
// need to make sure validation in form inputs - examples in add-specides (zod - schema/form validation)
// reuse form from addd-species

// copy form.. stuff
//copy kingdom stuff
// copy onsubmit handler line 90 species card
// remove asynch to get rid of error
// console log input to temporarily get rid of not using error
//update forms default values to species information - move defaut values under const type Formdata

//EX: change default value scientific_name: species.scientific_name

//change add species to edit species

// making popup view mode instead of

// under type Formdata in specises card around line 50
// creating state variable - cost [isEditing, setIsEditing] = useState (more I didnt get down )

// if isediting state variable false make viewonly true

// all in species card
// Input readOnly = (!isEditing)

//remove placeholder attributes from species card dialogue form
