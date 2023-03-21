import { useLocation } from "@solidjs/router";
import { createEffect, useContext } from "solid-js";

import { createContext, ParentProps } from "solid-js";
import { createStore } from "solid-js/store";

type Section = {
  title: string;
  href: string;
};

type PageStateData = {
  sections: () => readonly Section[];
  addSection: (title: string, href: string) => void;
};

export const PageStateContext = createContext<PageStateData>();

export const PageStateProvider = (props: ParentProps) => {
  const [store, setStore] = createStore<{ sections: Section[]; path: string }>({
    sections: [],
    path: "",
  });

  const data: PageStateData = {
    sections() {
      return store.sections;
    },
    addSection(title, href) {
      // replace html entities with their actual characters
      const entities = [["&amp;", "&"], ["&lt;", "<"], ["&gt;", ">"], ["&quot;", '"'], ["&#39;", "'"]];
      for (let i = 0; i < entities.length; i++) {
        title = title.replace(new RegExp(entities[i][0], "g"), entities[i][1]);
      }
      
      setStore("sections", (sections) => [
        ...new Set([...sections, { title, href }]),
      ]);
    },
  };

  createEffect(() => {
    const { pathname } = useLocation();
    setStore("sections", []);
    setStore("path", pathname);
  });

  return (
    <PageStateContext.Provider value={data}>
      {props.children}
    </PageStateContext.Provider>
  );
};

export function usePageState() {
  return useContext(PageStateContext);
}
