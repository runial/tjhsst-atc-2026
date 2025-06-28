import {HOME_SECTION_HEADERS} from "@/app/constants";
import {leaders} from "@/(assets)/leaders";
import {LeaderBox} from "@/(components)/Leader";
import {Section} from "@/(components)/Section";
import React from "react";

export function LeadershipSection() {
  return (
    <Section className="flex flex-col gap-8">
      <h1>{HOME_SECTION_HEADERS.LEADERS}</h1>
      <div className="overflow-x-auto flex gap-8 py-5">
        {
          leaders.map((leader) => (
            <LeaderBox key={leader.name} leader={leader} className="shrink-0"/>
          ))
        }
      </div>
    </Section>
  );
}