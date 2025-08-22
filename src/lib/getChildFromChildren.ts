import * as React from "react";

export function getChildFromChildren(children: React.ReactNode, childName: string) {
    return React.Children.map(children, (child: React.ReactNode) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        child && child.type.displayName === childName ? child : null)
    );
}