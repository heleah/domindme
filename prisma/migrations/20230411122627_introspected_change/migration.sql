-- CreateTable
CREATE TABLE "todos" (
    "id" BIGSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "task" TEXT,
    "is_complete" BOOLEAN DEFAULT false,
    "inserted_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
    "category" TEXT,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "todos_id_key" ON "todos"("id");
