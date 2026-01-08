"use client";

import { Button } from "./button";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Spinner } from "./spinner-1";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function ProfileSection() {
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const provider = params.get("provider");
  const router = useRouter();

  // show toast if provider exists in url
  useEffect(() => {
    if (provider) {
      toast.success(`Successfully signed in with ${provider}`);
      router.replace("/");
    }
  }, [provider]);

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div>
      {!session ? (
        <Link href="/sign-in">
          <Button
            variant="default"
            className="rounded-lg text-xs md:text-sm"
            size="sm"
          >
            Join Porcyn
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="border-2 h-9 w-9 border-border/80">
              <AvatarImage
                src={session.user?.image || undefined}
                alt={session.user?.name || "User Avatar"}
              />
              <AvatarFallback>
                {session.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
