import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

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
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(5, "Tell us a little bit about what you're working on"),
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
            Let's <span className="text-accent italic font-light">talk</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Got a mockup you made with AI? A sketch on a napkin? A vague idea? Doesn't matter — reach out and we'll figure out the rest together. No intake forms, no jargon.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Reach out however you like</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:hello@moose-made.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Chat with us</p>
                      <p className="text-muted-foreground text-sm">hello@moose-made.com — quickest way to reach us</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@moose-made.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Email</p>
                      <p className="text-muted-foreground text-sm">hello@moose-made.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@moose-made.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Schedule a call</p>
                      <p className="text-muted-foreground text-sm">hello@moose-made.com</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 border border-border">
              <MessageCircle className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-serif font-semibold mb-2 text-lg">Not sure where to start?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                That's completely fine! Just drop us a message or send a photo of your idea. We love helping people figure out what's possible.
              </p>
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
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">You're all set!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out! We'll get back to you within a day — usually much sooner. Talk soon.
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
                <>
                  <h2 className="text-2xl font-serif font-semibold mb-2 text-primary">Send us a message</h2>
                  <p className="text-muted-foreground text-sm mb-8">We read every message and reply personally.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Your name</FormLabel>
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
                            <FormLabel className="text-primary font-medium">Your email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@email.com" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
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
                            <FormLabel className="text-primary font-medium">What are you trying to make?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your product, your idea, or just paste a link to your mockup. Feel free to include a phone number if you'd prefer we call or text."
                                className="rounded-none border-border min-h-[160px] bg-background/50 focus-visible:ring-accent resize-y"
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
