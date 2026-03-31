import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSubmitted(true);
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <div className="bg-background pt-12 pb-24 min-h-[80vh]">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Start a <span className="text-accent italic font-light">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you need a quick technical clarification or you're ready to overhaul your entire packaging supply chain, our team is here to help.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-12">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Direct Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">hello@moose-made.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-primary">HQ</p>
                    <p className="text-muted-foreground">
                      123 Industrial Way<br />
                      Suite 400<br />
                      Brooklyn, NY 11201
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 border border-border">
              <h4 className="font-serif font-semibold mb-2">Need a detailed quote?</h4>
              <p className="text-sm text-muted-foreground mb-4">Our quote wizard collects all the necessary specifications to give you an accurate estimate.</p>
              <a href="/quote" className="text-accent font-medium inline-flex items-center hover:text-primary transition-colors">
                Go to Quote Request <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white p-8 md:p-12 border border-border shadow-sm">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-secondary text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">Message Received</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. A packaging specialist will review your inquiry and get back to you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-none border-border"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@company.com" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Subject (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="General Inquiry" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you today?" 
                              className="rounded-none border-border min-h-[150px] bg-background/50 focus-visible:ring-accent resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 text-base mt-4"
                      disabled={submitContact.isPending}
                    >
                      {submitContact.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
