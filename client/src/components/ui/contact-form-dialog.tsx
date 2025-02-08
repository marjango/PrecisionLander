import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Check } from "lucide-react";

const phoneSchema = z.object({
  phone: z.string()
    .min(1, "Phone number is required")
    .max(20, "Phone number is too long")
    .regex(/^\+?[0-9]+$/, "Only numbers and + are allowed")
});

type FormData = z.infer<typeof phoneSchema>;

interface ContactFormDialogProps {
  children: React.ReactNode;
}

export function ContactFormDialog({ children }: ContactFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log("Phone number submitted:", data.phone);
    setIsSuccess(true);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setIsSuccess(false);
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Get in touch</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground">
              Share your phone number, and our manager will contact you via WhatsApp
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="+1234567890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
            <p className="text-muted-foreground">
              Our manager will contact you shortly via WhatsApp
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}