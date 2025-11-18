"use client";

import { layoutConfig } from "@/config/layout.config";
import { Button, Link } from "@heroui/react";

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen"
      style={{
        height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
      }}
    >
      <div className="text-8xl font-bold text-gray-300">404</div>
      <h1 className="text-3xl font-bold trecking-tight">страница не найдена</h1>
      <div className="pt-6">
        <Button as={Link} color="primary" variant="shadow" href="/">
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
